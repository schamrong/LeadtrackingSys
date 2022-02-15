<?php

namespace App\Http\Controllers;

use App\Models\TagentRegistor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
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
        $agents = DB::select('select IP_CODE from TAGENTS');
        $manager_code = DB::select('select AGENT_CODE from TAGENT_MANAGEMENTS where AGENT_CODE != MANAGEMENT_CODE');
        return view('admin.create_user_form',compact('agents','manager_code'));
    }
    public function createUserIA(Request $request)
    {
        $agents = DB::select('select agent_code from TAGENT_REGISTORS');
        foreach($agents as $agent)
        {
            if($request->agent_code == $agent->agent_code)
            {
                return redirect()->back()->with('message','This IP CODE Already Exist.');
            }
        }
        TagentRegistor::create([
            'agent_code'=>$request->agent_code,
            'password'=>Hash::make($request->password)
        ]);
        return redirect()->back()->with('message','User Create Successfully');
    }
    public function createUserManager(Request $request)
    {
        $agents = DB::select('select agent_code from TAGENT_REGISTORS');
        foreach($agents as $agent)
        {
            if($request->agent_code == $agent->agent_code)
            {
                return redirect()->back()->with('message','This IP CODE Already Exist.');
            }
        }
        TagentRegistor::create([
            'agent_code'=>$request->agent_code,
            'password' => Hash::make($request->password)
        ]);
        return redirect()->back()->with('message','User Create Successfully');
    }
    public function createUserHead(Request $request)
    {
        $agents = DB::select('select agent_code from TAGENT_REGISTORS');
        foreach($agents as $agent)
        {
            if($request->agent_code == $agent->agent_code)
            {
                return redirect()->back()->with('message','This IP CODE Already Exist.');
            }
        }
        TagentRegistor::create([
            'agent_code'=>$request->agent_code,
            'password'=> Hash::make($request->password)
        ]);
        DB::table('TAGENT_MANAGEMENTS')->insert([
            'AGENT_CODE'=>$request->agent_code,
            'MANAGEMENT_CODE'=>$request->agent_code,
        ]);
        return redirect()->back()->with('message','User Create Successfully');
    }
    public function allCustomer()
    {
        $customers = DB::select("select TAGENT_CUSTOMERS.ID,TAGENT_CUSTOMERS.AGENT_CODE,TAGENT_CUSTOMERS.BRANCH_CODE,TAGENT_CUSTOMERS.FIRST_NAME,TAGENT_CUSTOMERS.LAST_NAME,TAGENT_CUSTOMERS.GENDER,TAGENT_CUSTOMERS.DOB,TAGENT_CUSTOMERS.CONTACT_NUMBER,TAGENT_CUSTOMERS.EMAIL,TAGENT_CUSTOMERS.ESTIMATE_INCOME,TAGENT_CUSTOMERS.RELATION_CUST,TAGENT_CUSTOMERS.CREATE_BY,TAGENT_CUSTOMERS.CREATE_DATE,TAGENT_CUSTOMERS.PROVINCE,TAGENT_CUSTOMERS.DISTRICT,TAGENT_CUSTOMERS.ADDRESS,TAGENT_CUSTOMERS.STATUS from TAGENT_CUSTOMERS left join TAGENTS on TAGENT_CUSTOMERS.CREATE_BY = TAGENTS.IP_CODE");    
        return view('admin.allcustomer', compact('customers'));
    }
    public function allUser()
    {
        $users = DB::select("select * from TAGENT_REGISTORS left join TAGENTS on TAGENTS.IP_CODE = TAGENT_REGISTORS.agent_code");    
        return view('admin.alluser', compact('users'));
    }
    public function customerActive($id)
    {
        DB::table('TAGENT_CUSTOMERS')->where('ID',$id)->update(['STATUS'=>1]);

        return redirect()->back()->with('message','Active Customer Successfully.');
    }
    public function customerDisable($id)
    {
        DB::table('TAGENT_CUSTOMERS')->where('ID',$id)->update(['STATUS'=>0]);
        return redirect()->back()->with('message','Disabled Customer Successfully.');
    }
    public function userActive($id)
    {
        DB::table('TAGENT_REGISTORS')->where('id',$id)->update(['status'=>1]);

        return redirect()->back()->with('message','Active User Successfully.');
    }
    public function userDisable($id)
    {
        DB::table('TAGENT_REGISTORS')->where('id',$id)->update(['status'=>0]);
        return redirect()->back()->with('message','Disabled User Successfully.');
    }
    public function userChangePassword(Request $request)
    {
        if(Hash::check($request->cur_password,Auth::user()->password)){
            DB::table('TAGENT_REGISTORS')->where('agent_code',Auth::user()->agent_code)->update(['password'=>Hash::make($request->new_password)]);
            return redirect()->back()->with('message','Password changed successfully.');

        }else{
            return redirect()->back()->with('message','Unable to change password.');
        }
        
    }
    public function transferInfo()
    {
        return view('admin.transfer_info');
    }
    public function handleTransfer(Request $request)
    {
        DB::table('TAGENT_CUSTOMERS')->where('AGENT_CODE',$request->cur_agent_code)->update(['AGENT_CODE'=>$request->new_agent_code]);
        return redirect()->back()->with('message','Transfer successfully');
    }

    public function userResetPassword($id)  
    {
        $user = DB::table('TAGENT_REGISTORS')->where('agent_code',$id)->first();
        // return ['user'=>$user];
        return view('admin.resetPasswordForm',compact('user'));
       
    }

    public function performResetPassword($id,Request $request){
        DB::table('TAGENT_REGISTORS')->where('id',$id)->update(['password'=>Hash::make($request->password)]);
        return redirect()->back()->with('message','Reset Successfully');
    }
}
