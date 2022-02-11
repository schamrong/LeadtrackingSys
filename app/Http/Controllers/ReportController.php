<?php

namespace App\Http\Controllers;

use App\Exports\AllLogExport;
use App\Exports\ByStatusReport;
use App\Exports\FilterReport;
use App\Exports\LastestReport;
use App\Exports\TemplateReport;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use SebastianBergmann\Environment\Console;

class ReportController extends Controller
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
    public function index()
    {
        return Excel::download(new AllLogExport, 'AllLogReport.xlsx');
    }
    public function reportByFilter($filter)
    {
        $filterDate = '';
        if ($filter == 'today') {
            $filterDate = 'DAY';
        } else if ($filter == 'month') {
            $filterDate = 'MONTH';
        } else if ($filter == 'year') {
            $filterDate = 'YEAR';
        }
        if ($filterDate != '') {
            $logs = DB::select("select IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE as 'LOG_DATE',TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENTS.MANAGER from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUST_LOGS.CREATE_BY where TAGENT_CUST_LOGS.CREATE_BY='" . Auth::user()->agent_code . "' and DATEDIFF(" . $filterDate . ",TAGENT_CUST_LOGS.CREATE_DATE,CURDATE())=0 ORDER BY TAGENT_CUST_LOGS.CREATE_DATE ASC;");
            if (!empty($logs)) {
                return Excel::download(new FilterReport($filter, $logs), $filter . 'Report.xlsx');
            } else {
                return redirect()->back()->with('message', 'There is no data for this ' . $filter);
            }
        } else {
            return redirect()->back();
        }
    }
    public function reportLastest(Request $request)
    {   
        // return $request->all();
        $condition = '';
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
        if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code)
        {
            // if user has request all condition
            if(!empty($request->min) && !empty($request->max) && !empty($request->CREATE_BY) && !empty($request->BRANCH_CODE) && !empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }
            // if user has request min date and max date only
            else if(!empty($request->min) && !empty($request->max) && empty($request->CREATE_BY) && empty($request->BRANCH_CODE) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'";
            }else if(!empty($request->min) && !empty($request->max) && !empty($request->CREATE_BY) && empty($request->BRANCH_CODE) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'";
            }
            // if user has request [min & max & branch]
            else if(!empty($request->min) && !empty($request->max) && !empty($request->BRANCH_CODE)  && empty($request->CREATE_BY) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'";
            }
            // if user has request [min & max & status]
            else if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME)  && empty($request->BRANCH_CODE)  && empty($request->CREATE_BY)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }
            // if user has request [min & max & status or IA/IP]
            else if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->CREATE_BY) && empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'";
            }
            // if user has request [min & max & status & branch]
            else if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE) && empty($request->CREATE_BY)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'";
            }
            // if user has request [status only]
            else if(empty($request->min) && empty($request->max) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE)  && empty($request->CREATE_BY)){
                $condition = " where TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }
            // if user has request [branch only]
            else if(empty($request->min) && empty($request->max) && !empty($request->BRANCH_CODE) && empty($request->CREATE_BY) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'";
            }
            // if user has request [create_by only]
            else if(empty($request->min) && empty($request->max) && !empty($request->CREATE_BY) && empty($request->BRANCH_CODE)  && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'";
            }
            // if user has request [create_by & status]
            else if(empty($request->min) && empty($request->max) && !empty($request->CREATE_BY) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }
            // if user has request [branch & status]
            else if(empty($request->min) && empty($request->max) && !empty($request->BRANCH_CODE) && !empty($request->STATUS_NAME) && empty($request->CREATE_BY)){
                $condition = " where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }else{
                if(!empty($request->min) && empty($request->max) || empty($request->min) && !empty($request->max)){
                    return redirect()->back()->with('message','Please select date correctly');
                }else{
                $condition = " where MONTH(TAGENT_CUST_LOGS.CREATE_DATE)= MONTH(CURDATE()) and YEAR(TAGENT_CUST_LOGS.CREATE_DATE)= YEAR(CURDATE()) ";
                }
            }
            //  return $condition;
        
        }else if($users[0]->IP_CODE == $agent_code && $users[0]->MANAGER == $management_code)
        {
            if(!empty($request->min) && !empty($request->max) && !empty($request->CREATE_BY) && !empty($request->BRANCH_CODE) && !empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"."TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(!empty($request->min) && !empty($request->max) && empty($request->CREATE_BY) && empty($request->BRANCH_CODE) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(!empty($request->min) && !empty($request->max) && !empty($request->CREATE_BY) && empty($request->BRANCH_CODE) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(!empty($request->min) && !empty($request->max) && !empty($request->BRANCH_CODE)  && empty($request->CREATE_BY) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME)  && empty($request->BRANCH_CODE)  && empty($request->CREATE_BY)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->CREATE_BY) && empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE) && empty($request->CREATE_BY)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(empty($request->min) && empty($request->max) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE)  && empty($request->CREATE_BY)){
                $condition = " where TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"."and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(empty($request->min) && empty($request->max) && !empty($request->BRANCH_CODE) && empty($request->CREATE_BY) && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(empty($request->min) && empty($request->max) && !empty($request->CREATE_BY) && empty($request->BRANCH_CODE)  && empty($request->STATUS_NAME)){
                $condition = " where TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"."and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(empty($request->min) && empty($request->max) && !empty($request->CREATE_BY) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }else if(empty($request->min) && empty($request->max) && !empty($request->BRANCH_CODE) && !empty($request->STATUS_NAME) && empty($request->CREATE_BY)){
                $condition = " where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }
            else{
                if(!empty($request->min) && empty($request->max) || empty($request->min) && !empty($request->max)){
                    return redirect()->back()->with('message','Please select date correctly');
                }else{
                    $condition=" where TAGENTS.MANAGER = '" . $users[0]->MANAGER . "' and MONTH(TAGENT_CUST_LOGS.CREATE_DATE)= MONTH(CURDATE()) and YEAR(TAGENT_CUST_LOGS.CREATE_DATE)= YEAR(CURDATE())";
                }
            }
            //  return $condition;
                 
        }else{
            if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'" ." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "' and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'";
            }
            else if(!empty($request->min) && !empty($request->max) && empty($request->STATUS_NAME) && empty($request->BRANCH_CODE))
            {
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'" ." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }elseif(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE))
            {   
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "' and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }elseif(!empty($request->min) && !empty($request->max) && empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE))
            {   
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "' and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."' and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else if(empty($request->min) && empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."' and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else if(empty($request->min) && empty($request->max) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'" ." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else if(empty($request->min) && empty($request->max) && empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'" ." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else{
                if(!empty($request->min) && empty($request->max) || empty($request->min) && !empty($request->max)){
                    return redirect()->back()->with('message','Please select date correctly');
                }else{
                $condition=" where TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "' and MONTH(TAGENT_CUST_LOGS.CREATE_DATE)= MONTH(CURDATE()) and YEAR(TAGENT_CUST_LOGS.CREATE_DATE)= YEAR(CURDATE()) ";
                }
            }
            // return $condition;
           
        }
        try{
            $logs = DB::select("SELECT IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE = TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,FLOOR(DATEDIFF(DAY, TAGENT_CUSTOMERS.DOB, CURDATE()) / 365.25) as 'DOB',TAGENT_CUST_LOGS.CREATE_DATE FROM TAGENT_CUST_LOGS
            INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID  inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join TAGENTS on TAGENT_CUST_LOGS.CREATE_BY = TAGENTS.IP_CODE ".$condition." order by TAGENT_CUST_LOGS.CREATE_DATE DESC;");
        }catch(Exception $ex){
            // return redirect()->back()->with('message','Can\'t generate report,Please contact to admin');
            return $ex;
        }
       
        if (count($logs)) {
            return Excel::download(new TemplateReport($logs), 'LeadTracking Report.xlsx');
        } else {
            return redirect()->back()->with('message', 'No data were found.')->withInput();
        }
    }
    public function reportDateRange(Request $request)
    {
        if (!empty($request->min) && !empty($request->max)) {
            $logs = DB::select("select IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE = TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,DATEDIFF(YEAR,TAGENT_CUSTOMERS.DOB,CURDATE()) as 'DOB' from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE left join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUST_LOGS.CREATE_BY where TAGENT_CUSTOMERS.AGENT_CODE='" . Auth::user()->agent_code . "' and TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "' ORDER BY TAGENT_CUST_LOGS.CREATE_DATE DESC;");
            if (count($logs)) {
                return Excel::download(new TemplateReport($logs), $request->min . ' to ' . $request->max . 'LeadTracking Report.xlsx');
            } else {
                return redirect()->back()->with('message', 'No data between ' . $request->min . ' to ' . $request->max . ' were found.');
            }
        } else {
            $logs = DB::select("select IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE=TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,DATEDIFF(YEAR,TAGENT_CUSTOMERS.DOB,CURDATE()) as 'DOB',TAGENT_CUST_LOGS.CREATE_DATE from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE left join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUST_LOGS.CREATE_BY where TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "' ORDER BY TAGENT_CUST_LOGS.CREATE_DATE DESC;");
            if (count($logs)) {
                return Excel::download(new TemplateReport($logs), 'LeadTracking Report.xlsx');
            }else {
                return redirect()->back()->with('message', 'No data between ' . $request->min . ' to ' . $request->max . ' were found.');
            }
        }
    }

    public function reportByRegion($id,Request $request)
    {
        if (!empty($request->min) && !empty($request->max)) {
            $logs = DB::select("SELECT IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE=TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,FLOOR(DATEDIFF(DAY, TAGENT_CUSTOMERS.DOB, CURDATE()) / 365.25) as 'DOB' FROM TAGENT_CUST_LOGS
            INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join TAGENTS on TAGENT_CUST_LOGS.CREATE_BY = TAGENTS.IP_CODE where TAGENTS.MANAGER = '" . $id . "' and TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'");
        } else {
            $logs = DB::select("SELECT IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE = TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,FLOOR(DATEDIFF(DAY, TAGENT_CUSTOMERS.DOB, CURDATE()) / 365.25) as 'DOB' FROM TAGENT_CUST_LOGS
            INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.ID) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join TAGENTS on TAGENT_CUST_LOGS.CREATE_BY = TAGENTS.IP_CODE where TAGENTS.MANAGER = '" . $id . "'");
        }
       
        if (count($logs)) {
            return Excel::download(new TemplateReport($logs), 'Lead Tracking Report.xlsx');
        } else {
            return redirect()->back()->with('message', 'No data' . ' were found.');
        }
    }
    public function reportAllAgentLog(Request $request)     
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
            if(!empty($request->min) && !empty($request->max))
            {
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'";
                
            }else{
                $condition = '';
            }
            $logs = DB::select("select IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE as 'LOG_DATE',TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE = TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,FLOOR(DATEDIFF(DAY, TAGENT_CUSTOMERS.DOB, CURDATE()) / 365.25) as 'DOB',TAGENT_CUST_LOGS.CREATE_DATE from TAGENTS​ inner join [dbo].[TAGENT_CUST_LOGS] on [dbo].[TAGENT_CUST_LOGS].CREATE_BY = [dbo].[TAGENTS].IP_CODE inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID ".$condition);
        }
        else
        {
            if(!empty($request->min) && !empty($request->max))
            {
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and [dbo].[TAGENT_MANAGEMENTS].agent_code != IP_CODE and [dbo].[TAGENT_MANAGEMENTS].Management_code = Manager;";
                
            }else{
                $condition = 'where [dbo].[TAGENT_MANAGEMENTS].agent_code != IP_CODE and [dbo].[TAGENT_MANAGEMENTS].Management_code = Manager;';
            }
            $logs = DB::select("select IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE as 'LOG_DATE',TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE = TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,FLOOR(DATEDIFF(DAY, TAGENT_CUSTOMERS.DOB, CURDATE()) / 365.25) as 'DOB',TAGENT_CUST_LOGS.CREATE_DATE from TAGENTS​ inner join [dbo].[TAGENT_CUST_LOGS] on [dbo].[TAGENT_CUST_LOGS].CREATE_BY = [dbo].[TAGENTS].IP_CODE inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join [dbo].[TAGENT_MANAGEMENTS] on MANAGER = '" . $users[0]->MANAGER . "'".$condition);      
        }
        if (count($logs)) {
            return Excel::download(new TemplateReport($logs), 'Lead Tracking Report.xlsx');
        } else {
            return redirect()->back()->with('message', 'No data' . ' were found.');
        } 
    }
    public function reportEachCustomerLog($id,Request $request)
    {
        if (!empty($request->min) && !empty($request->max)) {
            $logs = DB::select("select IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE = TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,DATEDIFF(YEAR,TAGENT_CUSTOMERS.DOB,CURDATE()) as 'DOB' from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE left join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUST_LOGS.CREATE_BY where TAGENT_CUST_LOGS.CUSTOMER_ID = '" . $id ."' and TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "' ORDER BY TAGENT_CUST_LOGS.ID DESC;");
        } else {
            $logs = DB::select("select IP_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,REASON,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.NEXT_STEP,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,(select EN_NAME from TAGENTS where IP_CODE in( select AGENT_CODE from TAGENT_MANAGEMENTS where MANAGEMENT_CODE in (select MANAGER from TAGENTS where IP_CODE=TAGENT_CUSTOMERS.CREATE_BY))) as MANAGER,DATEDIFF(YEAR,TAGENT_CUSTOMERS.DOB,CURDATE()) as 'DOB',TAGENT_CUST_LOGS.CREATE_DATE from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE left join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUST_LOGS.CREATE_BY where TAGENT_CUST_LOGS.CUSTOMER_ID = '" . $id ."' ORDER BY TAGENT_CUST_LOGS.ID DESC;");
        }
        // return $logs;
        if (count($logs)) {
            return Excel::download(new TemplateReport($logs), 'LeadTracking Report.xlsx');
        }else {
            return redirect()->back()->with('message', 'No data were found');
        }
    }
}
