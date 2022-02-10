@php
$admin = '';
$manager = '';
$head = '';
$staff = '';
$name = '';
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
if(Auth::user()->agent_code == 'ADMIN')
{
$admin = 'yes';
$name = Auth::user()->agent_code;
}
else if(Auth::user()->agent_code == $agent_code && Auth::user()->agent_code == $management_code)
{
$head = 'yes';
$name = Auth::user()->agent_code;
}
else if($users[0]->IP_CODE == $agent_code && $users[0]->MANAGER == $management_code)
{
$manager = 'yes';
$name=$users[0]->EN_NAME;
}else{
$staff = 'yes';
$name=$users[0]->EN_NAME;
}
@endphp
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Basic Page Info -->
    <meta charset="utf-8">
    <title>PLAC Lead Tracking</title>
    <link rel="icon" href="{{asset('asset/philliplife.png')}}">
    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/core.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/icon-font.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('src/plugins/datatables/css/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('src/plugins/datatables/css/responsive.bootstrap4.min.css')}}">
    @stack('style')
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/style.css')}}">
    <!-- <link rel="stylesheet" type="text/css" href="{{asset('src/plugins/sweetalert2/sweetalert2.min.css')}}"> -->
    <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}">

</head>

<body>
    <div class="header" style="background-color: rgb(0, 46, 110) !important;">
        <div class="header-left">
            <div class="menu-icon fa fa-bars" style="color:rgb(241, 90, 34) !important;"></div>
        </div>
        <div class="header-right">
            <div class="user-info-dropdown">
                <div class="dropdown">
                    <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        <span class="user-name mt-2 text-white">{{$name}}</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                        <a class="dropdown-item" href="{{url('/profile')}}"><i class="menu-icon fas fa-user"></i> Profile</a>
                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                            <i class="menu-icon fas fa-sign-out-alt"></i>{{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="left-side-bar">
        <div class="brand-logo d-flex justify-content-center bg-orange align-items-center">
            <p style="font-weight: bolder;color:white;margin:0px !important">PHILLIPLIFE ASSURANCE</p>
            <div class="close-sidebar" data-toggle="left-sidebar-close">
                <i class="ion-close-round"></i>
            </div>
        </div>
        <div class="menu-block customscroll" style="background-color: rgb(0, 46, 110) !important;">
            <div class="sidebar-menu">
                <ul id="accordion-menu">
                    <!-- <li class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle">
                            <span class="micon dw dw-house-1"></span><span class="mtext">Home</span>
                        </a>
                        <ul class="submenu">
                            <li><a href="{{url('/create_customer')}}">Create Customer</a></li>
                            <li><a href="{{url('/customer')}}">Customer</a></li>
                            <li><a href="{{url('/all/logs')}}">All Logs</a></li>
                        </ul>
                    </li> -->

                    <li>
                        <a href="{{url('/home')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='home') ? 'active' : ''}} ">
                            <span class="micon fa fa-bar-chart"></span><span class="mtext">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/create_customer')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='create_customer') ? 'active' : ''}}">
                            <span class="micon fa fa-user"></span><span class="mtext">Create Customer</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/customer')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='customer' && request()->segment(2)=='') ? 'active' : ''}}">
                            <span class="micon fa fa-users"></span><span class="mtext">Customers List</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/all/logs')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='all' && request()->segment(2)=='logs') ? 'active' : ''}}">
                            <span class="micon fa fa-file-text"></span><span class="mtext">All My Logs</span>
                        </a>
                    </li>
                    @if($manager == 'yes' || $head == 'yes' || $admin == 'yes')
                    <li>
                        <a href="{{url('/manager/agent/logs')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='manager' && request()->segment(2)=='agent' && request()->segment(3)=='logs') ? 'active' : ''}}">
                            <i class="micon icon-copy fa fa-address-card-o" aria-hidden="true"></i><span class="mtext">All Agents Logs
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/manager/agent/customers')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='manager' && request()->segment(2)=='agent' && request()->segment(3)=='customers') ? 'active' : ''}}">
                        <i class="micon fa fa-users"></i><span class="mtext">Customer From Agent
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/manager/agent')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='manager' && request()->segment(2)=='agent' && request()->segment(3)=='') ? 'active' : ''}}">
                            <i class="micon icon-copy fa fa-users" aria-hidden="true"></i><span class="mtext">All Your Agent
                            </span>
                        </a>
                    </li>
                    @endif
                    @if($head == 'yes' || $admin == 'yes')
                    <li>
                        <a href="{{url('/head/all_manager')}}" class="dropdown-toggle no-arrow {{(request()->segment(1)=='head' && request()->segment(2)=='all_manager') ? 'active' : ''}}">
                            <i class="micon icon-copy fa fa-address-book-o" aria-hidden="true"></i><span class="mtext">
                                RSM & UMT Report
                            </span>
                        </a>
                    </li>
                    @endif
                    @if($admin == 'yes')
                    <li class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle">
                        <i class="micon icon-copy fa fa-user-secret" aria-hidden="true"></i><span class="mtext">Administrator</span>
                        </a>
                        <ul class="submenu">
                            <li>
                                <a href="{{url('/admin/all_customers')}}" class="{{(request()->segment(1)=='admin' && request()->segment(2)=='all_customers') ? 'active' : ''}}">
                                   All Customers
                                    
                                </a>
                            </li>
                            <li>
                                <a href="{{url('/admin/create_user')}}" class="{{(request()->segment(1)=='admin' && request()->segment(2)=='create_user') ? 'active' : ''}}">
                                   Create User
                                    
                                </a>
                            </li>
                            <li>
                                <a href="{{url('/admin/all_users')}}" class="{{(request()->segment(1)=='admin' && request()->segment(2)=='all_users') ? 'active' : ''}}">
                                   All Users
                                    
                                </a>
                            </li>
                            <li>
                                <a href="{{url('/admin/transfer_info')}}" class="{{(request()->segment(1)=='admin' && request()->segment(2)=='transfer_info') ? 'active' : ''}}">
                                   Transfer Info
                                    
                                </a>
                            </li>
                        </ul>
                    </li>

                    @endif
                </ul>
            </div>
        </div>
    </div>
    <div class="mobile-menu-overlay"></div>

    <div class="main-container">
        <div class="pd-ltr-20">
            @yield('content')

            <!-- footer -->
            <div class="footer-wrap pd-20 mb-20 card-box">
                Lead Tracking By IT Department V.1.0
            </div>
        </div>
    </div>
    <script src="{{asset('vendors/scripts/core.js')}}"></script>
    <script src="{{asset('vendors/scripts/scroll.js')}}"></script>
    <script src="{{asset('vendors/scripts/script.min_old.js')}}"></script>
    <script src="{{asset('src/plugins/datatables/js/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('src/plugins/datatables/js/dataTables.bootstrap4.min.js')}}"></script>
    <script src="{{asset('src/plugins/datatables/js/dataTables.responsive.min.js')}}"></script>
    <script src="{{asset('src/plugins/datatables/js/responsive.bootstrap4.min.js')}}"></script>

    @stack('customer')
</body>

</html>