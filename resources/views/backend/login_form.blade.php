<!DOCTYPE html>
<html>

<head>
    <!-- Basic Page Info -->
    <meta charset="utf-8">
    <title>Lead Tracking</title>

    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="{{asset('asset/philliplife.png')}}">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/core.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/style.css')}}">
</head>

<body class="login-page">
    <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-6 col-lg-5">
                    <div class="login-box bg-white box-shadow border-radius-10">
                        <div class="col-12 text-center mb-3">
                            <img src="{{asset('/asset/logo.png')}}" alt="" width="200px">
                        </div>
                        <form action="{{url('/login')}}" method="POST">
                            @csrf


                            @if(Session::has('message'))
                            <div class="alert alert-danger">{{Session::get('message')}}</div>
                            @endif
                            <div class="input-group custom">
                                <input type="text" class="form-control form-control-lg @error('agent_code') is-invalid @enderror" name="agent_code" placeholder="IA/IP CODE" value="{{old('agent_code')}}">
                                <div class="input-group-append custom">
                                    <span class="input-group-text"><i class="icon-copy dw dw-user1"></i></span>
                                </div>
                                @error('agent_code')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>


                            <div class="input-group custom">
                                <input type="password" class="form-control form-control-lg @error('password') is-invalid @enderror" name="password" placeholder="**********">
                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="input-group mb-0">
                                        <input class="btn btn-primary btn-lg btn-block" type="submit" value="Sign In">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>