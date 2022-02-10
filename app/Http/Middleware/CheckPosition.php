<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CheckPosition
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
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
        if(Auth::user()->agent_code == 'ADMIN')
        {
           return $next($request);
        }
        else if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code)
        {
           return $next($request); 
        } 
        else if($users[0]->IP_CODE == $agent_code && $users[0]->MANAGER == $management_code)
        {
           return $next($request);     
        }else{
            
            return redirect('/error404');
        }
    }
}
