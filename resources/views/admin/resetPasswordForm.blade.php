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
        <form action="{{url('/admin/user/reset/'.$user->id.'/password')}}" method="POST">
            <div class="modal-body">
                @csrf

                <div class="form-group row">
                    <label class="col-sm-12 col-md-2 col-form-label">Agent Code</label>
                    <div class="col-sm-12 col-md-10">
                        <input type="text" class="form-control" name="agent_code" placeholder="Agent Code" autocomplete="off" required value="{{$user->agent_code}}" readonly>
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
                <button type="submit" class="btn btn-primary">Reset</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </form>
    </div>



</div>
</div>
@endSection