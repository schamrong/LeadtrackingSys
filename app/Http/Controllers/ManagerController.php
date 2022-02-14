<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ManagerController extends Controller
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
    public function allAgentLogs()
    {
        $management_code = '';
        $agent_code = '';
        $managers = DB::select('select * from TAGENT_MANAGEMENTS');
        $users = DB::select("select IP_CODE,MANAGER,EN_NAME from TAGENTS where IP_CODE = '" . Auth::user()->agent_code . "'");
        foreach($managers as $m)
        {
            if($m->AGENT_CODE == Auth::user()->agent_code)
            {
                $management_code = $m->MANAGEMENT_CODE;
                $agent_code = $m->AGENT_CODE;
            }
        }
        if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code)
        {
            try{
                // $logs = DB::select("select TAGENT_CUST_LOGS.ID,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.REASON,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_FEEDBACKS.NAME as FEED_BACK,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.PREMIUM from TAGENTS​ inner join [dbo].[TAGENT_CUST_LOGS] on [dbo].[TAGENT_CUST_LOGS].CREATE_BY = [dbo].[TAGENTS].IP_CODE inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID order by TAGENT_CUST_LOGS.ID DESC");

                $logs = DB::table('TAGENTS')->join('TAGENT_CUST_LOGS','TAGENT_CUST_LOGS.CREATE_BY','=','TAGENTS.IP_CODE')->join('TAGENT_CUSTOMERS','CUSTOMER_ID','=','TAGENT_CUSTOMERS.ID')->join('TAGENT_CUST_FEEDBACKS','CUST_FEEDBACK_CODE','=','TAGENT_CUST_FEEDBACKS.ID')->join('TAGENT_STATUS','TAGENT_CUST_LOGS.STATUS','=','TAGENT_STATUS.ID')->select('TAGENT_CUST_LOGS.ID','TAGENT_CUSTOMERS.GENDER','TAGENT_CUSTOMERS.FIRST_NAME','TAGENT_CUSTOMERS.LAST_NAME','TAGENT_CUSTOMERS.CONTACT_NUMBER','TAGENT_STATUS.STATUS_NAME','TAGENT_CUST_LOGS.NEXT_STEP','TAGENT_CUST_LOGS.PRODUCT_CODE','TAGENT_CUST_LOGS.REASON','TAGENT_CUST_LOGS.CREATE_BY','TAGENT_CUSTOMERS.AGENT_CODE','TAGENT_CUST_LOGS.CREATE_DATE','TAGENT_CUST_FEEDBACKS.NAME as FEED_BACK','TAGENT_CUSTOMERS.DOB','TAGENT_CUSTOMERS.EMAIL','TAGENT_CUSTOMERS.ESTIMATE_INCOME','TAGENT_CUSTOMERS.RELATION_CUST','TAGENT_CUSTOMERS.PROVINCE','TAGENT_CUSTOMERS.DISTRICT','TAGENT_CUSTOMERS.ADDRESS','TAGENT_CUST_LOGS.PREMIUM')->orderBy('TAGENT_CUST_LOGS.ID','desc')->paginate(10);
            }catch(Exception $ex){
                return view('error404',['message'=>$ex->getMessage()]);
            }
           
        }
        else
        {
            try{

                // $logs = DB::select("select TAGENT_CUST_LOGS.ID,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.REASON,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_FEEDBACKS.NAME as FEED_BACK,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.PREMIUM from TAGENTS​ inner join [dbo].[TAGENT_CUST_LOGS] on [dbo].[TAGENT_CUST_LOGS].CREATE_BY = [dbo].[TAGENTS].IP_CODE inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join [dbo].[TAGENT_MANAGEMENTS] on MANAGER = '" . $users[0]->MANAGER . "' where [dbo].[TAGENT_MANAGEMENTS].agent_code != IP_CODE and [dbo].[TAGENT_MANAGEMENTS].Management_code = Manager order by TAGENT_CUST_LOGS.ID DESC;");

                 $logs = DB::table('TAGENTS')->join('TAGENT_CUST_LOGS','TAGENT_CUST_LOGS.CREATE_BY','=','TAGENTS.IP_CODE')->join('TAGENT_CUSTOMERS','CUSTOMER_ID','=','TAGENT_CUSTOMERS.ID')->join('TAGENT_CUST_FEEDBACKS','CUST_FEEDBACK_CODE','=','TAGENT_CUST_FEEDBACKS.ID')->join('TAGENT_STATUS','TAGENT_CUST_LOGS.STATUS','=','TAGENT_STATUS.ID')->join('TAGENT_MANAGEMENTS','TAGENT_MANAGEMENTS.MANAGEMENT_CODE','=','TAGENTS.MANAGER')->select('TAGENT_CUST_LOGS.ID','TAGENT_CUSTOMERS.GENDER','TAGENT_CUSTOMERS.FIRST_NAME','TAGENT_CUSTOMERS.LAST_NAME','TAGENT_CUSTOMERS.CONTACT_NUMBER','TAGENT_STATUS.STATUS_NAME','TAGENT_CUST_LOGS.NEXT_STEP','TAGENT_CUST_LOGS.PRODUCT_CODE','TAGENT_CUST_LOGS.REASON','TAGENT_CUST_LOGS.CREATE_BY','TAGENT_CUSTOMERS.AGENT_CODE','TAGENT_CUST_LOGS.CREATE_DATE','TAGENT_CUST_FEEDBACKS.NAME as FEED_BACK','TAGENT_CUSTOMERS.DOB','TAGENT_CUSTOMERS.EMAIL','TAGENT_CUSTOMERS.ESTIMATE_INCOME','TAGENT_CUSTOMERS.RELATION_CUST','TAGENT_CUSTOMERS.PROVINCE','TAGENT_CUSTOMERS.DISTRICT','TAGENT_CUSTOMERS.ADDRESS','TAGENT_CUST_LOGS.PREMIUM')->where('TAGENT_MANAGEMENTS.agent_code','!=','IP_CODE')->where('TAGENT_MANAGEMENTS.Management_code','=',$users[0]->MANAGER)->orderBy('TAGENT_CUST_LOGS.ID','desc')->paginate(10);    
            }catch(Exception $ex){
                return view('error404',['message'=>$ex->getMessage()]);
            }
        }
        return view('manager.allYourAgentLogs', compact('logs'));
    }
    public function yourAgent()
    {
        $management_code = '';
        $agent_code = '';
        $managers = DB::select('select * from TAGENT_MANAGEMENTS');
        $users = DB::select("select IP_CODE,MANAGER,EN_NAME from TAGENTS where IP_CODE = '" . Auth::user()->agent_code . "'");
        foreach($managers as $m)
        {
            if($m->AGENT_CODE == Auth::user()->agent_code)
            {
                $management_code = $m->MANAGEMENT_CODE;
                $agent_code = $m->AGENT_CODE;
            }
        }
        if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code)
        {
            
            // $allAgents = DB::select("select IP_CODE,KH_NAME,EN_NAME,GENDER,DATE_OF_BIRTH,TELEPHONE,BRANCH from TAGENTS");
            
            // $allAgents = DB::select("select IP_CODE,KH_NAME,EN_NAME,GENDER,DATE_OF_BIRTH,TELEPHONE,BRANCH from TAGENTS inner join TAGENT_REGISTORS on TAGENTS.IP_CODE = TAGENT_REGISTORS.agent_code");
            $allAgents = DB::table('TAGENTS')->join('TAGENT_REGISTORS','TAGENTS.IP_CODE','=','TAGENT_REGISTORS.agent_code')->select('IP_CODE','KH_NAME','EN_NAME','GENDER','DATE_OF_BIRTH','TELEPHONE','BRANCH')->paginate(10);
        }
        else
        {
            // $allAgents = DB::select("select IP_CODE,KH_NAME,EN_NAME,GENDER,DATE_OF_BIRTH,TELEPHONE,BRANCH from TAGENTS inner join TAGENT_MANAGEMENTS on MANAGER = MANAGEMENT_CODE inner join TAGENT_REGISTORS on TAGENTS.IP_CODE = TAGENT_REGISTORS.agent_code where IP_CODE != '" . Auth::user()->agent_code . "' and management_code = '" . $users[0]->MANAGER . "'"); 
            $allAgents = DB::table('TAGENTS')->join('TAGENT_REGISTORS','TAGENTS.IP_CODE','=','TAGENT_REGISTORS.agent_code')->join('TAGENT_MANAGEMENTS','MANAGER','=','MANAGEMENT_CODE')->select('IP_CODE','KH_NAME','EN_NAME','GENDER','DATE_OF_BIRTH','TELEPHONE','BRANCH')->where('IP_CODE','!=',Auth::user()->agent_code)->where('management_code','=',$users[0]->MANAGER)->paginate(10);     
        }
        return view('manager.yourAgent', compact('allAgents'));
    }
    public function yourAgentCustomer()
    {
        $management_code = '';
        $agent_code = '';
        $managers = DB::select('select * from TAGENT_MANAGEMENTS');
        $users = DB::select("select IP_CODE,MANAGER,EN_NAME from TAGENTS where IP_CODE = '" . Auth::user()->agent_code . "'");
        foreach($managers as $m)
        {
            if($m->AGENT_CODE == Auth::user()->agent_code)
            {
                $management_code = $m->MANAGEMENT_CODE;
                $agent_code = $m->AGENT_CODE;
            }
        }
        if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code)
        {
            try{
                // $customers = DB::select("select TAGENT_CUSTOMERS.ID,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.CREATE_BY,TAGENT_CUSTOMERS.CREATE_DATE,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS from TAGENT_CUSTOMERS inner join TAGENTS on TAGENT_CUSTOMERS.CREATE_BY = TAGENTS.IP_CODE order by TAGENT_CUSTOMERS.ID DESC");
                $customers = DB::table('TAGENT_CUSTOMERS')
                ->join('TAGENTS','TAGENT_CUSTOMERS.CREATE_BY','=','TAGENTS.IP_CODE')
                ->select('TAGENT_CUSTOMERS.ID','TAGENT_CUSTOMERS.AGENT_CODE','TAGENT_CUSTOMERS.BRANCH_CODE','TAGENT_CUSTOMERS.FIRST_NAME','TAGENT_CUSTOMERS.LAST_NAME','TAGENT_CUSTOMERS.GENDER','TAGENT_CUSTOMERS.DOB','TAGENT_CUSTOMERS.CONTACT_NUMBER','TAGENT_CUSTOMERS.EMAIL','TAGENT_CUSTOMERS.ESTIMATE_INCOME','TAGENT_CUSTOMERS.RELATION_CUST','TAGENT_CUSTOMERS.CREATE_BY','TAGENT_CUSTOMERS.CREATE_DATE','TAGENT_CUSTOMERS.PROVINCE','TAGENT_CUSTOMERS.DISTRICT','TAGENT_CUSTOMERS.ADDRESS')
                ->paginate(10);
            }catch(Exception $ex)
            {
                return view('error404',['message'=>$ex->getMessage()]);
            }
             
        }
        else
        {
            try{
                // $customers = DB::select("select TAGENT_CUSTOMERS.ID,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.CREATE_BY,TAGENT_CUSTOMERS.CREATE_DATE,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS from TAGENT_CUSTOMERS inner join TAGENTS on TAGENT_CUSTOMERS.CREATE_BY = TAGENTS.IP_CODE inner join TAGENT_MANAGEMENTS on TAGENTS.MANAGER = TAGENT_MANAGEMENTS.MANAGEMENT_CODE where IP_CODE != '" . Auth::user()->agent_code . "' and TAGENT_MANAGEMENTS.MANAGEMENT_CODE = '" . $users[0]->MANAGER . "' order by TAGENT_CUSTOMERS.ID DESC;");
                $customers = DB::table('TAGENT_CUSTOMERS')->join('TAGENTS','TAGENT_CUSTOMERS.CREATE_BY','=','TAGENTS.IP_CODE')->join('TAGENT_MANAGEMENTS','TAGENTS.MANAGER','=','TAGENT_MANAGEMENTS.MANAGEMENT_CODE')->select('TAGENT_CUSTOMERS.ID','TAGENT_CUSTOMERS.AGENT_CODE','TAGENT_CUSTOMERS.BRANCH_CODE','TAGENT_CUSTOMERS.FIRST_NAME','TAGENT_CUSTOMERS.LAST_NAME','TAGENT_CUSTOMERS.GENDER','TAGENT_CUSTOMERS.DOB','TAGENT_CUSTOMERS.CONTACT_NUMBER','TAGENT_CUSTOMERS.EMAIL','TAGENT_CUSTOMERS.ESTIMATE_INCOME','TAGENT_CUSTOMERS.RELATION_CUST','TAGENT_CUSTOMERS.CREATE_BY','TAGENT_CUSTOMERS.CREATE_DATE','TAGENT_CUSTOMERS.PROVINCE','TAGENT_CUSTOMERS.DISTRICT','TAGENT_CUSTOMERS.ADDRESS')->where('IP_CODE','!=',Auth::user()->agent_code)->where('TAGENT_MANAGEMENTS.MANAGEMENT_CODE','=', $users[0]->MANAGER)->paginate(10);

            }catch(Exception $ex){
                return view('error404',['message'=>$ex->getMessage()]);
            }
                  
        }

        return view('manager.yourAgentCustomer', compact('customers'));
    }
    public function allYourManager(){
        try{
            $managers = DB::select('select IP_CODE,KH_NAME,EN_NAME,DATE_OF_BIRTH,GENDER,TELEPHONE,BRANCH,MANAGER from TAGENTS inner join TAGENT_MANAGEMENTS on TAGENTS.IP_CODE = TAGENT_MANAGEMENTS.AGENT_CODE and TAGENTS.MANAGER = TAGENT_MANAGEMENTS.MANAGEMENT_CODE;');
        }catch(Exception $ex){
            return view('error404',['message'=>$ex->getMessage()]);
        }
        return view('manager.allManager',compact('managers'));
    }
}
