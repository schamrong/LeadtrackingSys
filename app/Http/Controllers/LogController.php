<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Exception;

class LogController extends Controller
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            // $logs = DB::select("select TAGENT_CUST_LOGS.ID,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.REASON,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUSTOMERS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_FEEDBACKS.NAME as FEED_BACK,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.PREMIUM from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID left join TAGENT_PRODUCTS on TAGENT_CUST_LOGS.PRODUCT_CODE = TAGENT_PRODUCTS.PRODUCT_CODE where TAGENT_CUSTOMERS.AGENT_CODE='" . Auth::user()->agent_code . "' ORDER BY TAGENT_CUST_LOGS.ID DESC;");
            $logs = DB::table('TAGENT_CUST_LOGS')->join('TAGENT_CUSTOMERS','CUSTOMER_ID','=','TAGENT_CUSTOMERS.ID')->join('TAGENT_CUST_FEEDBACKS','CUST_FEEDBACK_CODE','=','TAGENT_CUST_FEEDBACKS.ID')->join('TAGENT_STATUS','TAGENT_CUST_LOGS.STATUS','=','TAGENT_STATUS.ID')->leftJoin('TAGENT_PRODUCTS','TAGENT_CUST_LOGS.PRODUCT_CODE','=','TAGENT_PRODUCTS.PRODUCT_CODE')->select('TAGENT_CUST_LOGS.ID','TAGENT_CUSTOMERS.GENDER','TAGENT_CUSTOMERS.FIRST_NAME','TAGENT_CUSTOMERS.LAST_NAME','TAGENT_CUSTOMERS.CONTACT_NUMBER','TAGENT_STATUS.STATUS_NAME','TAGENT_CUST_LOGS.NEXT_STEP','TAGENT_CUST_LOGS.PRODUCT_CODE','TAGENT_CUST_LOGS.REASON','TAGENT_CUSTOMERS.AGENT_CODE','TAGENT_CUSTOMERS.CREATE_BY','TAGENT_CUST_LOGS.CREATE_DATE','TAGENT_CUST_FEEDBACKS.NAME as FEED_BACK','TAGENT_CUSTOMERS.DOB','TAGENT_CUSTOMERS.EMAIL','TAGENT_CUSTOMERS.ESTIMATE_INCOME','TAGENT_CUSTOMERS.RELATION_CUST','TAGENT_CUSTOMERS.PROVINCE','TAGENT_CUSTOMERS.DISTRICT','TAGENT_CUSTOMERS.ADDRESS','TAGENT_CUST_LOGS.PREMIUM')->where('TAGENT_CUSTOMERS.AGENT_CODE','=',Auth::user()->agent_code)->orderBy('TAGENT_CUST_LOGS.ID','DESC')->paginate(10);
        }catch(Exception $ex)
        {
            return view('error404',['message'=>$ex->getMessage()]);
        }
       
        return view('customer.all_logs', compact('logs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        try{
            $users = DB::select("select TOP 1 * from TAGENTS where IP_CODE = '" . Auth::user()->agent_code . "'");
            DB::table('TAGENT_CUST_LOGS')->insert([
                'CUSTOMER_ID' => $id,
                'CUST_FEEDBACK_CODE' => $request->CUST_FEEDBACK_CODE,
                'REASON' => $request->REASON,
                'CREATE_BY' => Auth::user()->agent_code,
                "CREATE_DATE" => date("Y/m/d"),
                "STATUS" => $request->STATUS,
                "PRODUCT_CODE" => $request->PRODUCT_CODE,
                "NEXT_STEP" => $request->NEXT_STEP,
                "PREMIUM" => floatval($request->PREMIUM),
                "APPOINTMENT_DATE" => $request->APPOINTMENT_DATE,
                "APPLICATION_ID" => $request->APPLICATION_ID,
            ]);
            return redirect()->back()->with('message', 'Log add successfully');
        }catch(Exception $ex){
            return redirect()->back()->with('error','Add Log Unsucessful');
        }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
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
            $condition="where TAGENT_CUST_LOGS.CUSTOMER_ID = " . $id;
            
        }else if($users[0]->IP_CODE == $agent_code && $users[0]->MANAGER == $management_code)
        {
            $condition="where TAGENT_CUST_LOGS.CUSTOMER_ID = " . $id . " and TAGENTS.MANAGER = '".$users[0]->MANAGER."' order by TAGENT_CUST_LOGS.ID DESC;";
            
        } else{
            $condition = "where TAGENT_CUST_LOGS.CUSTOMER_ID = " . $id . " and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "' order by TAGENT_CUST_LOGS.ID DESC;";
        }
        try{
            $logs = DB::select("select TAGENT_CUST_LOGS.ID,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_PRODUCTS.PRODUCT_NAME,TAGENT_CUST_LOGS.REASON,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUSTOMERS.CREATE_BY,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUST_LOGS.CREATE_DATE,TAGENT_CUST_FEEDBACKS.NAME as FEED_BACK,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.PREMIUM from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID left join TAGENT_PRODUCTS on TAGENT_CUST_LOGS.PRODUCT_CODE = TAGENT_PRODUCTS.PRODUCT_CODE inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE ".$condition);
        }catch(Exception $ex){
            return view('error404',['message'=>$ex->getMessage()]);
        }
        
        return view('customer.logs', compact('logs','id'));
        // return $logs;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function filter(Request $request){
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
                $condition = "where TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }
            // if user has request [branch only]
            else if(empty($request->min) && empty($request->max) && !empty($request->BRANCH_CODE) && empty($request->CREATE_BY) && empty($request->STATUS_NAME)){
                $condition = "where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'";
            }
            // if user has request [create_by only]
            else if(empty($request->min) && empty($request->max) && !empty($request->CREATE_BY) && empty($request->BRANCH_CODE)  && empty($request->STATUS_NAME)){
                $condition = "where TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'";
            }
            // if user has request [create_by & status]
            else if(empty($request->min) && empty($request->max) && !empty($request->CREATE_BY) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE)){
                $condition = "where TAGENT_CUSTOMERS.AGENT_CODE = '".$request->CREATE_BY."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }
            // if user has request [branch & status]
            else if(empty($request->min) && empty($request->max) && !empty($request->BRANCH_CODE) && !empty($request->STATUS_NAME) && empty($request->CREATE_BY)){
                $condition = "where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'";
            }else{
                $condition='';
            }
            
            $position = 'manager';
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
                $condition=" where TAGENTS.MANAGER = '" . $users[0]->MANAGER . "'";
            }
           
            $position = 'manager';
        }else{
            if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE)){
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else if(!empty($request->min) && !empty($request->max) && empty($request->STATUS_NAME) && empty($request->BRANCH_CODE))
            {
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'" ." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            } else if(!empty($request->min) && !empty($request->max) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE))
            {
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }else if(!empty($request->min) && !empty($request->max) && empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE))
            {
                $condition = " where TAGENT_CUST_LOGS.CREATE_DATE BETWEEN '" . $request->min . "' and '" . $request->max . "'"." and TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else if(empty($request->min) && empty($request->max) && !empty($request->STATUS_NAME) && empty($request->BRANCH_CODE)){
                $condition = "where TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'" ." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }else if(empty($request->min) && empty($request->max) && empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE)){
                $condition = "where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else if(empty($request->min) && empty($request->max) && !empty($request->STATUS_NAME) && !empty($request->BRANCH_CODE)){
                $condition = "where TAGENT_CUSTOMERS.BRANCH_CODE = '".$request->BRANCH_CODE."'"." and TAGENT_STATUS.STATUS_NAME = '".$request->STATUS_NAME."'"." and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
            else{
                $condition=" where TAGENT_CUSTOMER.AGENT_CODE = '" . Auth::user()->agent_code . "'";
            }
           
            $position = 'staff';
        }
        try{
            $logs = DB::select("SELECT TAGENT_CUST_LOGS.ID,REASON,TAGENT_CUSTOMERS.FIRST_NAME+' '+TAGENT_CUSTOMERS.LAST_NAME as CUST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUST_FEEDBACKS.NAME as 'FEED_BACK',TAGENT_CUSTOMERS.REFER_BY,TAGENT_CUST_LOGS.CREATE_BY,TAGENT_CUST_LOGS.CREATE_DATE as 'LOG_DATE',TAGENT_CUST_LOGS.CUSTOMER_ID,TAGENT_CUST_LOGS.ID as 'LOGS_ID',TAGENT_STATUS.STATUS_NAME,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.PREMIUM,DOB,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUST_LOGS.APPOINTMENT_DATE,TAGENTS_BANK_BRANCHS.BRANCH_NAME as BRANCH_CODE,TAGENT_CUSTOMERS.AGENT_CODE FROM TAGENT_CUST_LOGS
        INNER JOIN (
        SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.[ID]) AS ID_Lastest
        FROM TAGENT_CUST_LOGS  
        GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
        ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.[ID] inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID  inner join TAGENTS_BANK_BRANCHS on TAGENTS_BANK_BRANCHS.BRANCH_CODE = TAGENT_CUSTOMERS.BRANCH_CODE inner join TAGENTS on TAGENT_CUST_LOGS.CREATE_BY = TAGENTS.IP_CODE ".$condition);
        }catch(Exception $ex){
            return ['data'=>''];
        }
        
        return ['data'=>$logs];
    }

    public function successPercentage()
    {
        $condition = '';
        $condition_total = '';
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
            $condition='';
            $condition_total='';
        } 
        else if($users[0]->IP_CODE == $agent_code && $users[0]->MANAGER == $management_code)
        {  
            $condition=" and TAGENTS.MANAGER = '".$users[0]->MANAGER."'";
            $condition_total=" where TAGENTS.MANAGER ='".$users[0]->MANAGER."'";
            
                    
        } else{
            $condition=" and TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code."'";
            $condition_total=" where TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code."'";
        }
        try{
             $successPercent = DB::select("
            SELECT Count(*)*100/(SELECT COUNT(*) FROM TAGENT_CUST_LOGS INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.[ID]) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE ".$condition_total.") as success FROM TAGENT_CUST_LOGS
            INNER JOIN (
            SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.[ID]) AS ID_Lastest
            FROM TAGENT_CUST_LOGS  
            GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
            ) tm ON TAGENT_CUST_LOGS.CUSTOMER_ID = tm.CUSTOMER_ID AND TAGENT_CUST_LOGS.ID = tm.ID_Lastest inner join TAGENT_CUSTOMERS on TAGENT_CUSTOMERS.ID = TAGENT_CUST_LOGS.CUSTOMER_ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.[ID] inner join TAGENT_CUST_FEEDBACKS on TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENTS on TAGENTS.IP_CODE = TAGENT_CUSTOMERS.AGENT_CODE WHERE STATUS_NAME= 'completed'".$condition);
        }catch(Exception $ex){
            return $successPercent = 0;
        }
       
        return $successPercent;
    }
}
