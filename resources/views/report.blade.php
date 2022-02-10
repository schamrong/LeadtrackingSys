<!DOCTYPE html>
<html>

<head>
    <!-- Basic Page Info -->
    <meta charset="utf-8">
    <title>Lead Tracking</title>
    <link rel="icon" href="{{asset('asset/philliplife.png')}}">
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/core.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/styles/style.css')}}">
</head>

<body class="login-page">
    <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div class="container">
            <table class="table table-bordered table-striped hover multiple-select-row data-table-export nowrap" id="customer">
                <thead>
                    <tr style="background-color: red;">
                        <th>Agent Code</th>
                        <th class="table-plus datatable-nosort">Cust Name</th>
                        <th>Gender</th>
                        <th>Logs Date</th>
                        <th>contact Number</th>
                        <th>Feedback</th>
                        <th>Reason</th>
                        <th>Owner</th>
                        <!-- <th>Action</th> -->
                    </tr>
                </thead>
                <tbody>
                    @foreach($logs as $log)
                    <tr>
                        <td>{{$log->AGENT_CODE}}</td>
                        <td class="table-plus">{{$log->LAST_NAME}} {{$log->FIRST_NAME}} </td>
                        <td>{{$log->GENDER}}</td>
                        <td>{{$log->CREATE_DATE}}</td>
                        <td>{{$log->CONTACT_NUMBER}}</td>
                        <td>{{$log->NAME}}</td>
                        <td>{{$log->REASON}}</td>
                        <td>{{$log->CREATE_BY}}</td>
                        <!-- <td>
                        <a class="mx-1" title="view" ​​ data-toggle="modal" data-target="#bd-example-modal-lg" type="button"><img src="{{url('asset/view.svg')}}" alt="" width="30"></a>
                        <a data-toggle="modal" data-target="#bd-example-modal-lg-1" title="edit" type="button"><img src="{{url('asset/edit.svg')}}" alt="" width="25"></a>
                        <a href="{{url('/log/'.$log->ID.'/delete')}}" title="remove" class="delete-confirm"><img src="{{url('asset/delete.svg')}}" alt="" width="27"></a>
                    </td> -->
                    </tr>

                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>