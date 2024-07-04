<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResiResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'no_resi' => $this->no_resi,
            'nama_pengirim' => $this->nama_pengirim,
            'alamat_pengirim' => $this->alamat_pengirim,
            'no_hp_pengirim' => $this->no_hp_pengirim,
            'nama_penerima' => $this->nama_penerima,
            'alamat_penerima' => $this->alamat_penerima,
            'no_hp_penerima' => $this->no_hp_penerima,
            'isi_kiriman' => $this->isi_kiriman,
            'berat_asli' => $this->berat_asli,
            'berat_volume' => $this->berat_volume,
            'qty' => $this->qty,
            'biaya_kirim' => $this->biaya_kirim,
            'biaya_packing' => $this->biaya_packing,
            'created_at' => (new Carbon($this->created_at))->format('d/m/Y'),
            'updated_at' => (new Carbon($this->updated_at))->format('d/m/Y'),
        ];
    }
}
