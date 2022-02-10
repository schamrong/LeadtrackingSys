<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest:agent', ['except' => ['logout']]);
    }

    public function showLoginForm()
    {
        return view('backend.login_form');
    }

    public function login(Request $request)
    {
        // Validate the form data
        $this->validate($request, [
            'agent_code'   => 'required|string',
            'password' => 'required|string'
        ]);

        try{
            // Attempt to log the user in
            if (Auth::guard('agent')->attempt(['agent_code' => $request->agent_code, 'password' => $request->password,'status'=>1], $request->remember)) {
                // if successful, then redirect to their intended location
                return redirect('/home');
            }
            return redirect()->back()->with('message','Login Failed: Your code or password is incorrect')->withInput($request->only('agent_code'));

        }catch(Exception $ex){
            return $ex;
        }

        // if unsuccessful, then redirect back to the login with the form data
    }

    public function logout()
    {
        try{
            Auth::guard('agent')->logout();
            return redirect('/');
        }catch(Exception $ex){
            return $ex;
        }
    }
}
