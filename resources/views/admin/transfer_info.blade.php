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
                    <li class="breadcrumb-item active" aria-current="page">Transfer User</li>
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
            <h4 class="text-blue h4">Transfer User</h4>
        </div>
    </div>
    <form action="{{url('/admin/handle_transfer')}}" method="POST">
        <div class="modal-body">
            @csrf

            <div class="form-group row">
                <label class="col-sm-12 col-md-2 col-form-label">Current Agent Code</label>
                <div class="col-sm-12 col-md-10">
                    <input type="text" class="form-control" name="cur_agent_code" placeholder="Current Agent Code" autocomplete="off" required>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-12 col-md-2 col-form-label">New Agent Code</label>
                <div class="col-sm-12 col-md-10">
                    <input type="text" class="form-control" name="new_agent_code" placeholder="New Agent Code" autocomplete="off" required>
                </div>
            </div>

        </div>
        <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Transfer</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </form>
</div>
</div>
@endsection
