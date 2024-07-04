<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResiRequest;
use App\Http\Requests\UpdateResiRequest;
use App\Http\Resources\ResiResource;
use App\Models\Resi;
use Illuminate\Http\Request;

class ResiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Resi::query();
        $sortField = request('sort_field', 'created_at');
        $sortDirection = request('sort_direction', 'desc');

        if(request('name')){
            $query->where('name', 'like', '%'. request('name').'%');
        }
        if(request('status')){
            $query->where('status', request('status'));
        }

        $resis = $query->orderBy($sortField, $sortDirection)
        ->paginate(10)
        ->onEachSide(1);

        return inertia("Resi/Index", [
            'resis' => ResiResource::collection($resis),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Resi/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreResiRequest $request)
    {
        $data = $request->validated();
        $lastResi = Resi::orderBy('id', 'desc')->first();
        $newId = $lastResi ? $lastResi->id + 1 : 1;
        $templateResi = sprintf('%04d', $newId);
        $data['no_resi'] = '23024H'.$templateResi;
        Resi::create($data);

        return to_route('resi.index')->with('success', 'Resi Berhasil Dibuat');

    }

    /**
     * Display the specified resource.
     */
    public function show(Resi $resi)
    {
        $pdf = app('dompdf.wrapper');
        dd($pdf);
        // return inertia('Resi/Show', [
        //     'resi' => new ResiResource($resi),
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resi $resi)
    {
        return inertia('Resi/Edit', [
            'resi' => new ResiResource($resi),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResiRequest $request, Resi $resi)
    {
        $data = $request->validated();
        $resi->update($data);
        return to_route('resi.index')->with('success', 'BTT '.$resi->name.' berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resi $resi)
    {
        //
    }

    public function refresh()
    {
        return ('Ini Halaman Untuk Refresh sesuai kondisi yang diinginkan pengguna');
    }

    public function cetakPenjualan()
    {
        return ('Ini Halaman untuk Cetak Penjualan Harian');
    }
}
