@extends('layouts.auth')

@section('title', 'Profile Page')

@section('styles')
<style>
    #para {
        color:green;
    }
</style>
@endsection

@section('content')
<p id="para">I am from profile page</p>
@endsection

@section('scripts')
<script>
    alert('Running')
</script>
@endsection