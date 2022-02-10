@extends('layouts.app')

@section('content')
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>Create User</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Create User</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
@if(Session::has('message'))
<div class="container-fluid">
    <div class="row">
        <div class="col-12 p-0">
            <div class="alert alert-success">
                {{Session::get('message')}}
            </div>
        </div>
    </div>
</div>

@endif
<div class="pd-20 card-box mb-30">
    <div class="clearfix">
        <div class="pull-left">
            <h4 class="text-blue h4">Create User</h4>
        </div>
    </div>
    <div class="card-body">
        <button class="btn btn-primary" data-toggle="modal" data-target="#create-ia">Create User For IA/IP</button>
        <button class="btn btn-primary" data-toggle="modal" data-target="#create-manager">Create User For Mananger</button>
        <button class="btn btn-primary" data-toggle="modal" data-target="#create-head">Create User For Head</button>
    </div>
    <div class="modal fade bs-example-modal-lg" id="create-ia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myLargeModalLabel">User Info</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <form action="{{url('/admin/create/user_ia')}}" method="POST">
                    <div class="modal-body">
                        @csrf
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Agent Code</label>
                            <div class="col-sm-12 col-md-10">
                                <select class="custom-select col-12" name="agent_code" required>
                                    <option value="">Choose...</option>
                                    @foreach($agents as $agent)
                                    <option value="{{$agent->IP_CODE}}">{{$agent->IP_CODE}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Password</label>
                            <div class="col-sm-12 col-md-10">
                                <input type="password" class="form-control" placeholder="Password" name="password" required>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Create</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="modal fade bs-example-modal-lg" id="create-manager" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myLargeModalLabel">Manager Info</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <form action="{{url('/admin/create/user_manager')}}" method="POST">
                    <div class="modal-body">
                        @csrf
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Agent Code</label>
                            <div class="col-sm-12 col-md-10">
                                <select class="custom-select col-12" name="agent_code" required>
                                    <option value="">Choose...</option>
                                    @foreach($manager_code as $manager)
                                    <option value="{{$manager->AGENT_CODE}}">{{$manager->AGENT_CODE}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Password</label>
                            <div class="col-sm-12 col-md-10">
                                <input type="password" class="form-control" placeholder="Password" name="password" required>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Create</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="modal fade bs-example-modal-lg" id="create-head" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myLargeModalLabel">Head Info</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <form action="{{url('/admin/create/user_head')}}" method="POST">
                    <div class="modal-body">
                        @csrf
                       
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Agent Code</label>
                            <div class="col-sm-12 col-md-10">
                                <input type="text" class="form-control" name="agent_code" placeholder="Agent Code" autocomplete="off" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Password</label>
                            <div class="col-sm-12 col-md-10">
                                <input type="password" class="form-control" placeholder="Password" autocomplete="new-password" name="password" required>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Create</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
@endsection