@extends('layouts.app')

@section('content')
<!-- Content Header (Page header) -->
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>Profile</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="card-box mb-20">
    <div class="row p-2">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                        @foreach($users as $user)
                        @if($user->GENDER == 'M')
                        <img src="{{asset('asset/boy.png')}}" alt="Male User" class="rounded-circle" width="150">
                        @elseif($user->GENDER == 'F')
                        <img src="{{asset('asset/woman.png')}}" alt="Female User" class="rounded-circle" width="150">
                        @else
                        <img src="{{asset('asset/user.png')}}" alt="Unknown User" class="rounded-circle" width="150">
                        @endif
                        @endforeach
                        <div class="mt-3">
                            <h4>@foreach($users as $user)
                                {{$user->EN_NAME}} 
                                @endforeach</h4>
                            <p class="text-secondary mb-1">
                                {{Auth()->user()->agent_code}}
                            </p>
                            <p class="text-muted font-size-sm">
                            @foreach($users as $user)
                            {{$user->POSITION}}
                            @endforeach
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            @foreach($users as $user)
                            {{$user->EN_NAME}}
                            @endforeach
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Position</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            @foreach($users as $user)
                            {{$user->POSITION}}
                            @endforeach
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            @foreach($users as $user)
                            {{$user->EMAIL}}
                            @endforeach
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            @foreach($users as $user)
                            {{$user->TELEPHONE}}
                            @endforeach
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            @foreach($users as $user)
                            {{$user->ADDRESS}}
                            @endforeach
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">
                                Remark
                            </h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <!-- remark here -->
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="row p-2">
        <div class="col-md-4">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>Website</h6>
                        <a href="{{url('http://philliplife.com.kh')}}" class="text-secondary">www.philliplife.com.kh</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube mr-2 icon-inline">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>Youtube</h6>
                        <a href="{{url('https://www.youtube.com/channel/UCRZXTWTFYhuCrUyXtHDlLQw')}}" class="text-secondary">Phillip Life Cambodia</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>Instagram</h6>
                        <a href="{{url('https://www.instagram.com/philliplifecambodia/')}}" class="text-secondary">philliplifecambodia</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>Facebook</h6>
                        <a href="{{url('https://www.facebook.com/PhillipLifeCambodia')}}" class="text-secondary">Phillip Life Cambodia</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <form action="{{url('/user/change_password/form')}}" method="POST">
                        @csrf
                        @method('patch')
                        @if(Session::has('message'))
                        <div class="form-group row alert {{Session::get('message')=='Password changed successfully.' ? 'alert-success' : 'alert-danger'}}">
                            <div class="col-md-12">
                              {{Session::get('message')}}  
                            </div>
                        </div>
                        @endif
                        <div class="form-group row">
                            <div class="col-md-6">
                                <label>Current Password</label>
                                <input class="form-control" type="password" name="cur_password" placeholder="" required>
                            </div>
                            <div class="col-md-6">
                                <label>Password</label>
                                <input class="form-control" type="password" name="new_password" placeholder="" autocomplete="off" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12 text-right">
                                <input class="btn btn-warning" type="submit" value="Change">
                            </div>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    </div>
</div>
@endsection