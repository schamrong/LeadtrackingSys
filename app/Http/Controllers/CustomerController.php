<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
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
        $feedbacks = DB::table('TAGENT_CUST_FEEDBACKS')->get();
        $statuses = DB::table('TAGENT_STATUS')->get();
        // $customers = DB::table('TAGENT_CUSTOMERS')->where('CREATE_BY', Auth::user()->agent_code)->where('STATUS', '1')->get();
        $products = DB::table('TAGENT_PRODUCTS')->get();
        // $ip_codes = DB::select('select IP_CODE,EN_NAME from TAGENTS;');
        $customers = DB::select("SELECT TAGENT_CUSTOMERS.ID,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUST_LOGS.CUST_FEEDBACK_CODE,TAGENT_CUST_LOGS.PREMIUM,TAGENT_CUST_LOGS.PRODUCT_CODE,TAGENT_CUST_LOGS.STATUS,TAGENT_CUST_LOGS.NEXT_STEP,TAGENT_CUST_LOGS.APPOINTMENT_DATE,TAGENT_CUST_LOGS.REASON,TAGENT_CUSTOMERS.ESTIMATE_INCOME,RELATION_CUST,PROVINCE,DISTRICT,ADDRESS,TAGENT_CUSTOMERS.CREATE_DATE,REFER_BY,APPLICATION_ID FROM TAGENT_CUSTOMERS
        left JOIN (
        SELECT TAGENT_CUST_LOGS.CUSTOMER_ID, MAX(TAGENT_CUST_LOGS.[ID]) AS ID_Lastest
        FROM TAGENT_CUST_LOGS  
        GROUP BY TAGENT_CUST_LOGS.CUSTOMER_ID
        ) tm ON TAGENT_CUSTOMERS.ID = tm.CUSTOMER_ID left join TAGENT_CUST_LOGS on TAGENT_CUST_LOGS.ID = ID_Lastest WHERE TAGENT_CUSTOMERS.AGENT_CODE = '" . Auth::user()->agent_code . "' and TAGENT_CUSTOMERS.STATUS = 1;");


        // return view('customer.customer', compact('customers', 'feedbacks', 'statuses', 'products', 'ip_codes'));
        return view('customer.customer', compact('customers', 'feedbacks', 'statuses', 'products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $agents = DB::table('TAGENTS')->get();
        $branches = DB::table('TAGENTS_BANK_BRANCHS')->get();
        $ip_codes = DB::select('select IP_CODE,EN_NAME from TAGENTS;');

        return view('customer.create_customer', compact('agents', 'branches', 'ip_codes'));
        // return $agents;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::table('TAGENT_CUSTOMERS')->insert([
                "AGENT_CODE" => Auth::user()->agent_code,
                "REFER_BY" => $request->REFER_BY,
                "BRANCH_CODE" => $request->BRANCH_CODE,
                "FIRST_NAME" => $request->FIRST_NAME,
                "LAST_NAME" => $request->LAST_NAME,
                "GENDER" => $request->GENDER,
                "DOB" => $request->DOB,
                "CONTACT_NUMBER" => $request->CONTACT_NUMBER,
                "EMAIL" => $request->EMAIL,
                'ESTIMATE_INCOME' => $request->ESTIMATE_INCOME,
                'RELATION_CUST' => $request->RELATION_CUST,
                'PROVINCE' => $request->PROVINCE,
                'DISTRICT' => $request->DISTRICT,
                'ADDRESS' => $request->ADDRESS,
                'CUST_STATUS' => $request->CUST_STATUS,
                "CREATE_BY" => Auth::user()->agent_code,
                "CREATE_DATE" => date("Y/m/d"),
                "UPDATE_BY" => Auth::user()->agent_code,
                "UPDATE_DATE" => date("Y/m/d"),
                "STATUS" => '1',
            ]);
        } catch (Exception $ex) {
            return redirect()->back()->with('message', 'Can\'t create customer, Please try again.')->withInput();
        }
        return redirect()->back()->with('message', 'Customer create successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

        try {
            DB::table('TAGENT_CUSTOMERS')->where('ID', $id)->update([
                "REFER_BY" => $request->REFER_BY,
                'FIRST_NAME' => $request->FIRST_NAME,
                'LAST_NAME' => $request->LAST_NAME,
                'DOB' => $request->DOB,
                'GENDER' => $request->GENDER,
                'CONTACT_NUMBER' => $request->CONTACT_NUMBER,
                'ESTIMATE_INCOME' => $request->ESTIMATE_INCOME,
                'RELATION_CUST' => $request->RELATION_CUST,
                'PROVINCE' => $request->PROVINCE,
                'DISTRICT' => $request->DISTRICT,
                'EMAIL' => $request->EMAIL,
                'ADDRESS' => $request->ADDRESS,
                'CUST_STATUS' => $request->CUST_STATUS,
                "UPDATE_BY" => Auth::user()->agent_code,
                "UPDATE_DATE" => date("Y/m/d"),
            ]);
        } catch (Exception $e) {

            return redirect()->back()->with('message', 'Unable to update, some data input may be incorrect');
        }
        return redirect()->back()->with('message', 'Update successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {

            DB::table('TAGENT_CUSTOMERS')->where('ID', $id)->update(
                ["STATUS" => '0', 'UPDATE_BY' => Auth::user()->agent_code, 'UPDATE_DATE' => date('Y/m/d')]
            );
        } catch (Exception $ex) {
            return redirect()->back()->with('message', 'Unable to delete, please try again.');
        }
        return redirect()->back();
    }
}
