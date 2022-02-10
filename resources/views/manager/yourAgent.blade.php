@extends('layouts.app')

@section('content')
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>All Your Agent</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">All Your Agent</li>
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
<div class="card-box mb-30">
    <div class="pd-20">
        <h4 class="text-blue h4">All Your Agent</h4>
    </div>
    <div class="p-2">
        <table class="table table-bordered table-striped hover multiple-select-row data-table-export nowrap" id="customer">
            <thead>
                <tr>
                    <th>IP Code</th>
                    <th class="table-plus datatable-nosort">KH Name</th>
                    <th class="table-plus datatable-nosort">EN Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Contact Number</th>
                    <th>Branch</th>
                    <!-- <th>Action</th> -->
                </tr>
            </thead>
            <tbody>
                @foreach($allAgents as $log)
                <tr>
                    <td class="table-plus">{{$log->IP_CODE}}</td>
                    <td class="font-kh">{{$log->KH_NAME}}</td>
                    <td>{{$log->EN_NAME}}</td>
                    <td>{{$log->GENDER}}</td>
                    <td>{{$log->DATE_OF_BIRTH}}</td>
                    <td>{{$log->TELEPHONE}}</td>
                    <td>{{$log->BRANCH}}</td>
                    <!-- <td>
                        <a class="mx-1" title="view" ​​ data-toggle="modal" data-target="#bd-example-modal-lg" type="button"><img src="{{url('asset/view.svg')}}" alt="" width="30"></a>
                        <a data-toggle="modal" data-target="#bd-example-modal-lg-1" title="edit" type="button"><img src="{{url('asset/edit.svg')}}" alt="" width="25"></a>
                        <a href="{{url('')}}" title="remove" class="delete-confirm"><img src="{{url('asset/delete.svg')}}" alt="" width="27"></a>
                    </td> -->
                </tr>

                @endforeach
            </tbody>
        </table>
        {{$allAgents->links()}}
    </div>
</div>
@endsection
@push('customer')
<script>
    $("#customer").DataTable({
        "responsive": true,
        "lengthChange": true,
        "autoWidth": false,
        "bPaginate":false,
        columnDefs: [{
                responsivePriority: 1,
                targets: 0
            },
        ],"lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
    });
</script>
@endpush