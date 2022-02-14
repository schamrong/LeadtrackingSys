@extends('layouts.app')

@section('content')
<div class="page-header">
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="title">
                <h4>Dashboard</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{url('/home')}}">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
@if(Session::has('message'))
<div class="container-fluid">
    <div class="row">
        <div class="col-12 p-0">
            <div class="alert alert-success" id="message">
                {{Session::get('message')}}
            </div>
        </div>
    </div>
</div>
@endif
<!-- Filter Form -->
<div class="page-header">
    <div class="row">
        <div class="col-12">
            <form id="joiningDateSearch" method="GET" name="myform" onsubmit="return OnSubmitForm()">
                @csrf
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <div class="input-group mb-3">
                                    <label class="col-12">Start Date</label>
                                    <input class="form-control" type="date" id="min" name="min">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="min-reset">x</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="input-group mb-3">
                                    <label class="col-12">End Date</label>

                                    <input class="form-control" type="date" id="max" name="max">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="max-reset">x</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="row">

                         
                            <div class="col">
                                <div class="input-group mb-3">
                                    <label class="col-12">By IA/IP</label>
                                    <input type="text" class="form-control" name="CREATE_BY" placeholder="IA/IP CODE" id="filter-createby" value="{{old('CREATE_BY')}}">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="filter-createby-reset">x</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-group mb-3">
                                    <label class="col-12">By Branch</label>
                                    <select class="custom-select col-12 select-2" name="BRANCH_CODE" id="filter-branch">
                                        <option value="">Choose...</option>
                                        @foreach($branches as $branch)
                                        <option value="{{$branch->BRANCH_CODE}}">{{$branch->BRANCH_NAME}}</option>
                                        @endforeach
                                    </select>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="filter-branch-reset">x</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-group mb-3">
                                    <label class="col-12">By Status</label>
                                    <select class="custom-select col-12" name="STATUS_NAME" id="filter-status">
                                        <option value="">Choose...</option>
                                        @foreach($statuses as $status)
                                        <option value="{{$status->STATUS_NAME}}">{{$status->STATUS_NAME}}</option>
                                        @endforeach
                                    </select>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="filter-status-reset">x</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-primary" id="btnGo" type="button">Search</button>
                        <button class="btn btn-secondary" id="reset" type="button">reset</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 text-right">
                        <div class="dropdown">
                            <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                Report
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <input type="submit" class="dropdown-item" name="type" onclick="document.pressed=this.value" value="Report" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Filter Form -->

<!-- Status Form -->

<div class="row">
    <div class="col-xl-3 mb-30">
        <div class="card-box height-100-p widget-style1">
            <div class="d-flex flex-wrap align-items-center">
                <div class="progress-data d-flex">
                    <div id="chart" class="m-auto">
                        <i class="icon-copy fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="widget-data">
                    <div class="h4 mb-0" id="completed_status">
                    </div>
                    <div class="weight-600 font-14">Completed</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 mb-30">
        <div class="card-box height-100-p widget-style1">
            <div class="d-flex flex-wrap align-items-center">
                <div class="progress-data d-flex">
                    <div id="chart" class="m-auto">
                        <i class="icon-copy fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="widget-data">
                    <div class="h4 mb-0" id="pending_status">

                    </div>
                    <div class="weight-600 font-14">Pending</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 mb-30">
        <div class="card-box height-100-p widget-style1">
            <div class="d-flex flex-wrap align-items-center">
                <div class="progress-data d-flex">
                    <div id="chart" class="m-auto">
                        <i class="icon-copy fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="widget-data">
                    <div class="h4 mb-0" id="inprogress_status">

                    </div>
                    <div class="weight-600 font-14">In Progress</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 mb-30">
        <div class="card-box height-100-p widget-style1">
            <div class="d-flex flex-wrap align-items-center">
                <div class="progress-data d-flex">
                    <div id="chart" class="m-auto">
                        <i class="icon-copy fa fa-bar-chart" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="widget-data">
                    <div class="h4 mb-0" id="rejected_status">
                    </div>
                    <div class="weight-600 font-14">Customer Rejected</div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Status Form -->

<!-- Chart -->
<div class="row">
    <div class="col-xl-8 mb-30">
        <div class="card-box height-100-p pd-20">
            <h2 class="h4 mb-20">Activity</h2>
            <div id="chart4"></div>
        </div>
    </div>
    <div class="col-xl-4 mb-30">
        <div class="card-box height-100-p pd-20">
            <h2 class="h4 mb-20">Lead Total <span id="total-lead">
                @if(!empty($total_lead))
                {{$total_lead[0]->total_lead}}
                @endif
            </span></h2>
            <div id="chart6"></div>
        </div>
    </div>
</div>
<!-- Chart -->


<div class="card-box mb-30">
    <div class="pd-20">
        <h4 class="text-blue h4">Lastest Logs</h4>
    </div>
    <div class="p-2" style="overflow: hidden;">
        <table class="table table-bordered table-striped display hover nowrap" id="customer" style="width: 100% !important;">
            <thead>
                <tr>
                    <th>Handle_By</th>
                    <th>Cust_Name</th>
                    <th>Appoint_Date</th>
                    <th>Create_Date</th>
                    <th>Contact_Number</th>
                    <th>Product</th>
                    <th>Premium</th>
                    <th>Status</th>
                    <th>Feedback</th>
                    <th>Reason</th>
                    <th>Refer By</th>
                    <th>Branch</th>
                    <th>Create By</th>
                    <th>History</th>
                </tr>
            </thead>
        </table>
    </div>
</div>
@endsection
@push('customer')
<script src="{{asset('src/plugins/highcharts-6.0.7/code/highcharts.js')}}"></script>
<script src="{{asset('src/plugins/apexcharts/apexcharts.min.js')}}"></script>
<script src="{{asset('vendors/scripts/highchart-setting.js')}}"></script>

<script>
    var completed_status = 0;
    var inprogress_status = 0;
    var rejected_status = 0;
    var pending_status = 0;
    $("#filter-branch").change(function() {
        var branch = this.value;
        if (branch != '') {
            document.getElementById("filter-createby").value = '';
            $("#filter-createby").attr('disabled', true);
        } else {
            $("#filter-createby").attr('disabled', false);

        }
    });
    $("#filter-createby").focusin(function() {
        document.getElementById("filter-branch").value = '';
        $("#filter-branch").attr('disabled', true);
    });
    $("#filter-createby").focusout(function() {
        var createby = this.value;
        if (createby != '') {
            document.getElementById("filter-branch").value = '';
            $("#filter-branch").attr('disabled', true);
        } else {
            $("#filter-branch").attr('disabled', false);
        }
    });
    jQuery(document).ready(function($) {
        var table = $('#customer').DataTable({
            // "responsive": true,
            scrollX:true,
            "lengthChange": true,
            "autoWidth": false,
            "ajax": {
                "url": "dashboard",
                "type": "GET",
            },
            columnDefs: [{
                    responsivePriority: 1,
                    targets: [0, -1,7]
                },
                {
                    responsivePriority: 2,
                    targets: 1
                }, {
                    targets: -1,
                    render: function(data, type, full, meta) {
                        return '<a href=' + '"customer/' + data + '/all_log"' + ' class="d-block text-center" title="View History"><i class="icon-copy fa fa-history" aria-hidden="true" style="font-size:25px;padding:none !important;"></i></a>';
                    }
                }, {
                    targets: 7,
                    render: function(data, type, full, meta) {
                        if (data == 'Completed') {
                            return '<p class="bg-success text-white text-center m-0 rounded" style="padding:2px !important;"><span>' + data + '</span></p>';
                        } else if (data == 'In Progress') {
                            return '<p class="bg-warning text-black text-center m-0 rounded" style="padding:2px !important;"><span>' + data + '</span></p>';

                        } else if (data == 'Customer Rejected') {
                            return '<p class="bg-secondary text-white text-center m-0 rounded"  style="padding:2px !important;"><span>' + data + '</span></p>';

                        } else if (data == 'Pending') {
                            return '<p class="bg-primary text-white text-center m-0 rounded" style="padding:2px !important;"><span>' + data + '</span></p>';

                        } else {
                            return '<p class="m-0"><span>' + data + '</span></p>';
                        }
                    }
                }
            ],
            "order": [
                [3, "desc"]
            ],
            "columns": [{
                    "data": "AGENT_CODE"
                }, {
                    "data": "CUST_NAME"
                },
                {
                    "data": "APPOINTMENT_DATE"
                },
                {
                    "data": "LOG_DATE"
                },
                {
                    "data": "CONTACT_NUMBER"
                },
                {
                    "data": "PRODUCT_CODE"
                },
                {
                    "data": "PREMIUM"
                },
                {
                    "data": "STATUS_NAME"
                },
                {
                    "data": "FEED_BACK"
                },
                {
                    "data": "REASON"
                },
                {
                    "data": "REFER_BY"
                },
                {
                    "data": "BRANCH_CODE"
                },
                {
                    "data": "CREATE_BY"
                },
                {
                    "data": "CUSTOMER_ID"
                }
            ],

        });
        table.on('xhr', function() {
            var data = [];
            var getJsonData = table.ajax.json();
            for (let i = 0; i < getJsonData.data.length; i++) {
                data.push(Object.values(getJsonData.data[i]));
            }
            // console.log(data);
            completed_status = 0;
            inprogress_status = 0;
            rejected_status = 0;
            pending_status = 0;
            dataChart(data);
            $('#completed_status').html(completed_status);
            $('#inprogress_status').html(inprogress_status);
            $('#pending_status').html(pending_status);
            $('#rejected_status').html(rejected_status);
        });

        if ($('#message').text() == '') {

        } else {
            Swal.fire({
                icon: 'warning',
                text: $('#message').text(),
            })
        }
    });
    // this function is use to search and fill data with found value 
    $("#btnGo").click(function() {
        var urlFilter = '';
        var valid = true;
        var nice = true;
        var filterCreateBy = $('#filter-createby').val();
        var filterBranch = $('#filter-branch').val();
        var filterStatus = $('#filter-status').val();
        var minDate;
        var maxDate;

        var min = moment($("#min").val());
        if (!min.isValid()) {
            minDate = null;
        } else {
            minDate = min['_i'];
        }

        var max = moment($("#max").val());
        if (!max.isValid()) {
            maxDate = null;
        } else {
            maxDate = max['_i'];
        }

        if (minDate !== null && maxDate == null || maxDate !== null && minDate == null) {
            alert('Please select start date and end date correctly.');
            urlFilter = '/dashboard';
        } else if (minDate === null && maxDate === null && filterCreateBy === '' && filterBranch === '' && filterStatus === '') {
            urlFilter = '/dashboard';
        } else if (minDate !== null && maxDate !== null && filterCreateBy == '' && filterBranch == '' && filterStatus == '') {
            urlFilter = '/filter?min=' + minDate + '&max=' + maxDate + '&CREATE_BY=&BRANCH_CODE=&STATUS_NAME=';
        } else if (minDate === null && maxDate === null && filterCreateBy !== '' && filterBranch == '' && filterStatus == '') {
            urlFilter = '/filter?min=&max=&CREATE_BY=' + filterCreateBy + '&BRANCH_CODE=&STATUS_NAME=';

        } else if (minDate === null && maxDate === null && filterBranch !== '' && filterStatus == '' && filterCreateBy == '') {
            urlFilter = '/filter?min=&max=&CREATE_BY=&BRANCH_CODE=' + filterBranch + '&STATUS_NAME=';

        } else if (minDate === null && maxDate === null && filterBranch == '' && filterStatus !== '' && filterCreateBy == '') {
            urlFilter = '/filter?min=&max=&CREATE_BY=&BRANCH_CODE=&STATUS_NAME=' + filterStatus;
        } else if (minDate === null && maxDate === null && filterBranch !== '' && filterStatus !== '' && filterCreateBy == '') {
            urlFilter = '/filter?min=&max=&CREATE_BY=&BRANCH_CODE=' + filterBranch + '&STATUS_NAME=' + filterStatus;

        } else if (minDate === null && maxDate === null && filterCreateBy !== '' && filterStatus !== '' && filterBranch == '') {
            urlFilter = '/filter?min=&max=&CREATE_BY=' + filterCreateBy + '&BRANCH_CODE=&STATUS_NAME=' + filterStatus;

        } else if (minDate !== null && maxDate !== null && filterStatus !== '' && filterBranch == '' && filterCreateBy == '') {
            urlFilter = '/filter?min=' + minDate + '&max=' + maxDate + '&CREATE_BY=&BRANCH_CODE=&STATUS_NAME=' + filterStatus;

        } else if (minDate !== null && maxDate !== null && filterCreateBy !== '' && filterBranch == '' && filterStatus == '') {
            urlFilter = '/filter?min=' + minDate + '&max=' + maxDate + '&CREATE_BY=' + filterCreateBy + '&BRANCH_CODE=&STATUS_NAME=';

        } else if (minDate !== null && maxDate !== null && filterCreateBy == '' && filterBranch !== '' && filterStatus == '') {
            urlFilter = '/filter?min=' + minDate + '&max=' + maxDate + '&CREATE_BY=&BRANCH_CODE=' + filterBranch + '&STATUS_NAME=';

        } else if (minDate !== null && maxDate !== null && filterCreateBy == '' && filterBranch !== '' && filterStatus !== '') {
            urlFilter = '/filter?min=' + minDate + '&max=' + maxDate + '&CREATE_BY=&BRANCH_CODE=' + filterBranch + '&STATUS_NAME=' + filterStatus;

        } else if (minDate !== null && maxDate !== null && filterCreateBy !== '' && filterBranch == '' && filterStatus !== '') {
            urlFilter = '/filter?min=' + minDate + '&max=' + maxDate + '&CREATE_BY=' + filterCreateBy + '&BRANCH_CODE=&STATUS_NAME=' + filterStatus;
        } else {
            urlFilter = '/dashboard';
        }
        var tablenew = $("#customer").DataTable().clear().draw();
        tablenew.ajax.url(urlFilter).load();
        tablenew.ajax.reload();

    });
    // this function is use to reset date input and return all data to datatable
    $("#reset").click(function() {
        document.getElementById("min").valueAsDate = null;
        document.getElementById("max").valueAsDate = null;
        document.getElementById("filter-createby").value = '';
        document.getElementById("filter-branch").value = '';
        document.getElementById("filter-status").value = '';
        $("#filter-createby").attr('disabled', false);
        $("#filter-branch").attr('disabled', false);
        $("#filter-status").attr('disabled', false);
        var tablenew = $("#customer").DataTable().clear().draw();
        tablenew.ajax.url('dashboard').load();
        tablenew.ajax.reload();
    });
</script>
<script type="text/javascript">
    function OnSubmitForm() {
        if (document.pressed == 'Report') {
            document.myform.action = "{{url('export/logs/lastest_report')}}";
        } else {
            return false;
        }
        return true;
    }
</script>
<script>
    $("#filter-branch-reset").on("click", function() {
        $('#filter-branch option').prop('selected', function() {
            $("#filter-createby").attr('disabled', false);
            return this.defaultSelected;
        });
    });
    $("#filter-createby-reset").on("click", function() {
        document.getElementById('filter-createby').value = '';
        $("#filter-branch").attr('disabled', false);
    });
    $("#filter-status-reset").on("click", function() {
        $('#filter-status option').prop('selected', function() {
            return this.defaultSelected;
        });
    });
    $("#min-reset").on("click", function() {
        document.getElementById("min").valueAsDate = null;
    });
    $("#max-reset").on("click", function() {
        document.getElementById("max").valueAsDate = null;

    });
</script>
<script>
    let percent = 0;
    $(document).ready(function() {
        $.get("{{url('/successPercentage')}}", function(data) {
            // percent = data[0]['success'];
            if(data[0]['success']){
                percent = data[0]['success'];
            }else{
                percent = 0;
            }
            var options6 = {
                series: [percent],
                chart: {
                    height: 350,
                    type: 'radialBar',
                    offsetY: 0
                },
                colors: ['#0B132B', '#222222'],
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function(val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                labels: ['Succed Percentage Rate'],
            };
            var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
            chart6.render();
        });
    });
</script>
</script>
<script>
    $(document).ready(function() {
    $('.select-2').select2();
});
</script>
@endpush