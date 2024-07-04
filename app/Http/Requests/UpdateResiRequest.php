<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateResiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_pengirim' => ['required','string'],
            'no_hp_pengirim' => ['required','numeric'],
            'alamat_pengirim' => ['required','string'],
            'nama_penerima' => ['required','string'],
            'no_hp_penerima' => ['required','numeric'],
            'alamat_penerima' => ['required','string'],
            'isi_kiriman' => ['required','string'],
            'qty' => ['required', 'numeric'],
            'berat_volume' => ['nullable', 'numeric'],
            'berat_asli' => ['required', 'numeric'],
            'biaya_kirim' => ['required', 'numeric'],
            'biaya_packing' => ['nullable', 'numeric'],
        ];
    }
}
