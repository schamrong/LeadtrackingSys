@extends('layouts.app')

@section('content')
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>All Logs</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">All Logs</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="page-header">
    <div class="row">
        <div class="col-12">
            <form id="joiningDateSearch" action="{{url('/export/all_agent_logs/daterange')}}" method="POST">
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
                    <div class="col">
                        <button class="btn btn-primary" id="btnGo" type="button">Search</button>
                        <button class="btn btn-secondary" id="reset" type="button">reset</button>
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
        <h4 class="text-blue h4">All Logs</h4>
    </div>
    <div class="p-2">
        <div class="row mb-4 mr-1">
            <div class="col text-right">
                <button class="btn btn-outline-success" onclick="event.preventDefault();document.getElementById('joiningDateSearch').submit();"><i class="icon-copy fa fa-file-excel-o" aria-hidden="true"></i> Report</button>
            </div>
        </div>
        <div id="hello">

        </div>
        <table class="table table-bordered table-striped hover multiple-select-row data-table-export" id="customer">
            <thead>
                <tr>
                    <th>Handle_By</th>
                    <th>Cust Name</th>
                    <th>Gender</th>
                    <th>Create Date</th>
                    <th>Feedback</th>
                    <th>Next Step</th>
                    <th>Status</th>
                    <th>Products</th>
                    <th>contact Number</th>
                    <th>Reason</th>
                    <th>Create By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($logs as $log)
                <tr>
                    <td>{{$log->AGENT_CODE}}</td>
                    <td>{{$log->LAST_NAME}} {{$log->FIRST_NAME}} </td>
                    <td>{{$log->GENDER}}</td>
                    <td>{{date('m/d/Y',strtotime($log->CREATE_DATE))}}</td>
                    <td>{{$log->FEED_BACK}}</td>
                    <td>{{$log->NEXT_STEP}}</td>
                    <td class="{{($log->STATUS_NAME == 'Completed' ? 'text-success' : '')}} {{($log->STATUS_NAME == 'Customer Rejected' ? 'text-secondary' : '')}} {{($log->STATUS_NAME == 'In Progress' ? 'text-warning' : '')}} {{($log->STATUS_NAME == 'Pending' ? 'text-info' : '')}}">{{$log->STATUS_NAME}}</td>
                    <td>{{$log->PRODUCT_CODE}}</td>
                    <td>{{$log->CONTACT_NUMBER}}</td>
                    <td>{{$log->REASON}}</td>
                    <td>{{$log->CREATE_BY}}</td>
                    <td>
                        <a class="mx-1" title="view" ​​ data-toggle="modal" data-target="#bd-example-modal-lg-{{$log->ID}}" type="button"><img src="{{asset('asset/view.svg')}}" alt="" width="30"></a>
                        <!-- <a data-toggle="modal" data-target="#bd-example-modal-lg-1" title="edit" type="button"><img src="{{url('asset/edit.svg')}}" alt="" width="25"></a> -->
                        <!-- <a href="{{url('/log/'.$log->ID.'/delete')}}" title="remove" class="delete-confirm"><img src="{{url('asset/delete.svg')}}" alt="" width="27"></a> -->
                    </td>
                </tr>
                 <!-- View Customer Modal -->
                 <div class="modal fade bs-example-modal-lg" id="bd-example-modal-lg-{{$log->ID}}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel">Customer Info</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">

                                <div class="tab">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active text-blue" data-toggle="tab" href="#log-{{$log->ID}}" role="tab" aria-selected="false">Log</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-blue" data-toggle="tab" href="#customer-{{$log->ID}}" role="tab" aria-selected="true">Customer</a>
                                        </li>

                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade" id="customer-{{$log->ID}}" role="tabpanel">
                                            <div class="pd-20">
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>First Name</label>
                                                        <input class="form-control" type="text" placeholder="First Name" name="FIRST_NAME" value="{{$log->FIRST_NAME}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>Last Name</label>
                                                        <input class="form-control" type="text" placeholder="Last Name" name="LAST_NAME" value="{{$log->LAST_NAME}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Gender</label>
                                                        <input class="form-control" type="text" placeholder="Gender" name="GENDER" value="{{$log->GENDER}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>DateOfBirth</label>
                                                        <input class="form-control" type="date" name="DOB" value="{{$log->DOB}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Contact Number</label>
                                                        <input class="form-control" placeholder="Contact Number" type="tel" name="CONTACT_NUMBER" value="{{$log->CONTACT_NUMBER}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                        <input class="form-control" type="email" name="EMAIL" placeholder="Email" value="{{$log->EMAIL}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Estimate Income</label>
                                                        <input class="form-control" type="text" name="ESTIMATE_INCOME" value="{{$log->ESTIMATE_INCOME}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>Relation Customer</label>
                                                        <input class="form-control" type="text" name="RELATION_CUST" value="{{$log->RELATION_CUST}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Province</label>
                                                        <input class="form-control" type="text" name="PROVINCE" value="{{$log->PROVINCE}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>District</label>
                                                        <input class="form-control" type="text" name="DISTRICT" value="{{$log->DISTRICT}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col">
                                                        <label>Address</label>
                                                        <textarea class="form-control" type="text" name="ADDRESS" required disabled>{{$log->ADDRESS}}</textarea>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade show active" id="log-{{$log->ID}}" role="tabpanel">
                                            <div class="pd-20">
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Log Date</label>
                                                        <input class="form-control" type="text" name="CREATE_DATE" value="{{$log->CREATE_DATE}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>Handle By</label>
                                                        <input class="form-control" type="text" name="AGENT_CODE" value="{{$log->AGENT_CODE}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Product</label>
                                                        <input class="form-control" type="text" name="PRODUCT_CODE" value="{{$log->PRODUCT_CODE}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>Premium</label>
                                                        <input class="form-control" type="text" name="PREMIUM" value="{{$log->PREMIUM}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Feedback</label>
                                                        <input class="form-control" type="text" name="FEED_BACK" value="{{$log->FEED_BACK}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>Reason</label>
                                                        <input class="form-control" type="text" name="REASON" value="{{$log->REASON}}" required disabled>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-md-6">
                                                        <label>Status</label>
                                                        <input class="form-control {{($log->STATUS_NAME =='Completed') ? 'bg-success' : ''}} {{($log->STATUS_NAME=='In Progress') ? 'bg-warning' : ''}} {{($log->STATUS_NAME=='Pending') ? 'bg-info' : ''}} {{($log->STATUS_NAME=='Customer Rejected') ? 'bg-secondary' : ''}}" type="text" name="STATUS_NAME" value="{{$log->STATUS_NAME}}" required disabled>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label>Create By</label>
                                                        <input class="form-control" type="text" name="CREATE_BY" value="{{$log->CREATE_BY}}" required disabled>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End View Customer Modal -->
                @endforeach
            </tbody>
        </table>
        {{$logs->links()}}
    </div>
</div>

@endsection

@push('customer')
<script src="{{asset('src/plugins/sweetalert2/sweetalert2.min.js')}}"></script>
<script>
    //  $(document).ready(function(){
    //     var oTable = $('#customer').DataTable({
    //         processing: true,
    //         serverSide: false,
    //         ajax: "{{ url('/all/your_agent/logs/ajax') }}",
    //         columns: [
    //             {data: 'IP_CODE', name: 'IP_CODE'},
    //             {data: 'CUST_NAME', name: 'CUST_NAME'},
    //             {data: 'GENDER', name: 'GENDER'},
    //             {data: 'CREATE_DATE', name: 'CREATE_DATE'},
    //             {data: 'CONTACT_NUMBER', name: 'CONTACT_NUMBER'},
    //             {data: 'FEED_BACK', name: 'FEED_BACK'},
    //             {data: 'REASON', name: 'REASON'},
    //             {data: 'IP_CODE', name: 'IP_CODE'},
    //         ],scrollCollapse: true,
    //         autoWidth: false,
    //         responsive: true,
    //         columnDefs: [{
    //             targets: "datatable-nosort",
    //             orderable: false,
    //         }],
    //         "lengthMenu": [
    //             [10, 25, 50, -1],
    //             [10, 25, 50, "All"]
    //         ],
    //         "language": {
    //             "info": "_START_-_END_ of _TOTAL_ entries",
    //             searchPlaceholder: "Search",
    //             paginate: {
    //                 next: '<i class="ion-chevron-right"></i>',
    //                 previous: '<i class="ion-chevron-left"></i>'
    //             }
    //         },initComplete: function () {
    //         this.api().columns().every( function () {
    //             var column = this;
    //             var select = $('<select class="custom-select col-12"><option value="">Select Filter...</option></select>')
    //                 .appendTo( $('thead tr:eq(1) td').eq( this.index() ) )
    //                 .on( 'change', function () {
    //                     var val = $.fn.dataTable.util.escapeRegex(
    //                         $(this).val()
    //                     );

    //                     column
    //                         .search( val ? '^'+val+'$' : '', true, false )
    //                         .draw();
    //                 } );

    //             column.data().unique().sort().each( function ( d, j ) {
    //                 select.append( '<option value="'+d+'">'+d+'</option>' )
    //             } );
    //         } );
    //     },
    //     });

    //  });


    var table = $('#customer').DataTable({
        scrollCollapse: true,
        autoWidth: false,
        responsive: true,
        bPaginate: false,
        columnDefs: [{
            targets: "datatable-nosort",
            orderable: false,
        }, {
            targets: [3],
            type: "date",
        }, {
            responsivePriority: 1,
            targets: [6, -1]
        }, ],
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
    });
    // this function is use for push and get data and search from date input
    $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
        var valid = true;
        var min = moment($("#min").val());
        if (!min.isValid()) {
            min = null;
        }

        var max = moment($("#max").val());
        if (!max.isValid()) {
            max = null;
        }

        if (min === null && max === null) {
            // no filter applied or no date columns
            valid = true;
        } else {
            $.each(settings.aoColumns, function(i, col) {
                if (col.type == "date") {
                    var cDate = moment(data[i], "MM/DD/YYYY");
                    if (cDate.isValid()) {
                        if (max !== null && max.isBefore(cDate)) {
                            valid = false;
                        }
                        if (min !== null && cDate.isBefore(min)) {
                            valid = false;
                        }
                    } else {
                        valid = false;
                    }
                }
            });
        }
        return valid;
    });
    // this function is use to search and fill data with found value 
    $("#btnGo").click(function() {
        $("#customer").DataTable().draw();
    });
    // this function is use to reset date input and return all data to datatable
    $("#reset").click(function() {
        document.getElementById("min").valueAsDate = null;
        document.getElementById("max").valueAsDate = null;
        $("#customer").DataTable().draw();
    });

    $('.delete-confirm').on('click', function(event) {
        event.preventDefault();
        const url = $(this).attr('href');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0,46,110)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $(location).attr('href', url)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    });
</script>
@endpush