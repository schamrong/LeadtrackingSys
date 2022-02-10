@extends('layouts.app')

@section('content')
@if($position == 'manager')
@include('manager.dashboard')
@elseif($position == 'staff')
@include('staff.dashboard')
@else
@endif
@endsection