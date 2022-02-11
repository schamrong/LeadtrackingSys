<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:agent');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $branches = DB::table('TAGENTS_BANK_BRANCHS')->get();
        $statuses = DB::table('TAGENT_STATUS')->get();
        $management_code = '';
        $agent_code = '';
        $managers = DB::select('select * from TAGENT_MANAGEMENTS');
        $users = DB::select("select IP_CODE,MANAGER from TAGENTS where IP_CODE = '" . Auth::user()->agent_code . "'");
       
        foreach($managers as $m)
        {
            if($m->AGENT_CODE == Auth::user()->agent_code)
            {
                $management_code = $m->MANAGEMENT_CODE;
                $agent_code = $m->AGENT_CODE;
            }
        }
        if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code){
            $position = 'manager';  
            $total_lead = DB::select("SELECT COUNT(*) as total_lead FROM TAGENT_CUST_LOGS INNER JOIN (
                SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
                FROM TAGENT_CUST_LOGS  
                GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
                ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest");
            $condition='';
            $condition_total='';
        }else if($users[0]->IP_CODE == $agent_code && $users[0]->MANAGER == $management_code)
        {
            $position = 'manager';
            $total_lead = DB::select("SELECT COUNT(*) as total_lead FROM TAGENT_CUST_LOGS INNER JOIN (
                SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
                FROM TAGENT_CUST_LOGS  
                GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
                ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENTS ON TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE WHERE TAGENTS.MANAGER='".$users[0]->MANAGER."'");
         
            $condition=" and TAGENTS.MANAGER = '".$users[0]->MANAGER."'";
            $condition_total=" where TAGENTS.MANAGER ='".$users[0]->MANAGER."'";
        }else{
            $position = 'staff';
            $total_lead = DB::select("SELECT COUNT(*) as total_lead FROM TAGENT_CUST_LOGS INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID WHERE TAGENT_CUSTOMERS.AGENT_CODE='".Auth::user()->agent_code."'");
            $condition=" and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code."'";
            $condition_total=" where TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code."'";
        }
        $zeroOrNot = DB::select("SELECT COUNT(*) as Success FROM TAGENT_CUST_LOGS INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE " . $condition_total);
        try{
            $successPercent = DB::select("
            SELECT Count(*)*100/".$zeroOrNot[0]->Success." as success FROM TAGENT_CUST_LOGS
            INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE WHERE STATUS_NAME= 'completed'".$condition);
    
        }catch(Exception $ex){
            $successPercent=0;
        }
        
        return view('home', compact('position','branches','statuses','total_lead','successPercent'));
    
    }
    public function errorHandler()
    {
        return view('error404');
    }
    public function profile()
    {
        $users = DB::select("select * from TAGENTS where IP_CODE = '".Auth::user()->agent_code."'");
        return view('backend.profile',compact('users'));
    }
    public function dashboard()
    {

        $management_code = '';
        $agent_code = '';
        $managers = DB::select('select * from TAGENT_MANAGEMENTS');
        $users = DB::select("select IP_CODE,MANAGER from TAGENTS where IP_CODE = '" . Auth::user()->agent_code . "'");
        foreach($managers as $m)
        {
            if($m->AGENT_CODE == Auth::user()->agent_code)
            {
                $management_code = $m->MANAGEMENT_CODE;
                $agent_code = $m->AGENT_CODE;
            }
        }
        if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code){
            try{
                $logs = DB::select("SELECT TAGENT_CUST_LOGS.ID,REASON,CONCAT(TAGENT_CUSTOMERS.FIRST_NAME,' ',TAGENT_CUSTOMERS.LAST_NAME) as CUST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.REFER_BY,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE as 'LOG_DATE',TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.PREMIUM,DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.APPOINTMENT_DATE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,TAGENT_CUSTOMERS.AGENT_CODE
            FROM TAGENT_CUST_LOGS
            INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENTS_BANK_BRANCHS on TAGENT_CUSTOMERS.BRANCH_CODE = TAGENTS_BANK_BRANCHS.BRANCH_CODE WHERE MONTH(TAGENT_CUST_LOGS.CREATE_DATE)= MONTH(CURDATE()) and YEAR(TAGENT_CUST_LOGS.CREATE_DATE)= YEAR(CURDATE());");
            return ['data'=>$logs];
            }catch(Exception $e)
            {
                // return redirect()->back()->with('message','There might be some problems with server. Please contact to admin');
                return $e;
            }
            
        }   
        if($users[0]->IP_CODE == $agent_code && $users[0]->MANAGER == $management_code)
        {
            try{
                $logs = DB::select("SELECT TAGENT_CUST_LOGS.ID,REASON,CONCAT(TAGENT_CUSTOMERS.FIRST_NAME,' ',TAGENT_CUSTOMERS.LAST_NAME) as CUST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.REFER_BY,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE as 'LOG_DATE',TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.PREMIUM,DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.APPOINTMENT_DATE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,TAGENT_CUSTOMERS.AGENT_CODE
                FROM TAGENT_CUST_LOGS
                INNER JOIN (
                SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
                FROM TAGENT_CUST_LOGS  
                GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
                ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join [dbo].[TAGENT_MANAGEMENTS] on TAGENTS.MANAGER = TAGENT_MANAGEMENTS.MANAGEMENT_CODE WHERE TAGENT_MANAGEMENTS.MANAGEMENT_CODE = '" . $users[0]->MANAGER . "' and  MONTH(TAGENT_CUST_LOGS.CREATE_DATE)= MONTH(CURDATE()) and YEAR(TAGENT_CUST_LOGS.CREATE_DATE)= YEAR(CURDATE());");
               return ['data'=>$logs];
            }catch(Exception $e){
                return redirect()->back()->with('message','There might be some problems with server. Please contact to admin');
                
            }
           
           
        } 
        try{
            $logs = DB::select("SELECT TAGENT_CUST_LOGS.ID,REASON,CONCAT(TAGENT_CUSTOMERS.FIRST_NAME,' ',TAGENT_CUSTOMERS.LAST_NAME) as CUST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.REFER_BY,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE as 'LOG_DATE',TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.PREMIUM,DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.APPOINTMENT_DATE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,TAGENT_CUSTOMERS.AGENT_CODE
            FROM TAGENT_CUST_LOGS
            INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE WHERE TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "' and  MONTH(TAGENT_CUST_LOGS.CREATE_DATE)= MONTH(CURDATE()) and YEAR(TAGENT_CUST_LOGS.CREATE_DATE)= YEAR(CURDATE());");
            return ['data'=>$logs];
        }catch(Exception $e){
            // return redirect()->back()->with('message','There might be some problems with server. Please contact to admin');
            return $e;
        }
       
    }
    
    
}
