@extends('layouts.app')

@section('content')
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>Report By RSM And UMT</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Report By RSM And UMT</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="page-header">
    <div class="row">
        <div class="col-12">
            <form id="joiningDateSearch" onsubmit="return OnSubmitForm()" method="GET" name="myform">
                @csrf
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <label>Start Date</label>
                            <input class="form-control" type="date" id="min" name="min">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <label class="col-form-label">End Date</label>
                            <input class="form-control" type="date" id="max" name="max">
                        </div>
                    </div>


                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 text-right">
                        <div class="dropdown">
                            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                Report
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                @foreach($managers as $manager)
                                <input type="submit" class="dropdown-item" name="{{$manager->MANAGER}}" onclick="document.pressed=$('#{{$manager->MANAGER}}').attr('name');" value="{{$manager->EN_NAME}}" id="{{$manager->MANAGER}}"/>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </form>
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
        <h4 class="text-blue h4">Report By RSM and UMT</h4>
    </div>
    <div class="p-2">
        <table class="table table-bordered table-striped hover multiple-select-row data-table-export nowrap" id="customer">
            <thead>
                <tr>
                    <th>IP Code</th>
                    <th>KH Name</th>
                    <th>EN Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Contact Number</th>
                    <th>Branch</th>
                </tr>
            </thead>
            <tbody>
                @foreach($managers as $manager)
                <tr>
                    <td class="table-plus">{{$manager->IP_CODE}}</td>
                    <td class="font-kh">{{$manager->KH_NAME}}</td>
                    <td>{{$manager->EN_NAME}}</td>
                    <td>{{$manager->GENDER}}</td>
                    <td>{{$manager->DATE_OF_BIRTH}}</td>
                    <td>{{$manager->TELEPHONE}}</td>
                    <td>{{$manager->BRANCH}}</td>
                </tr>

                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
@push('customer')
<script>
    $("#customer").DataTable({
        "responsive": true,
        "lengthChange": true,
        "autoWidth": false,
        columnDefs: [{
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: [-1, -2]
            }
        ],
    });
</script>
<script type="text/javascript">
    function OnSubmitForm() {
        document.myform.action = 'http://192.168.2.12/leadtrackingsys/export/logs/' + document.pressed + '/region';
        console.log(document.myform.action);
        return true;
    }
</script>
@endpush