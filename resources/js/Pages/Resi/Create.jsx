import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({auth}){
    const {data, setData, post, errors, reset} = useForm({
        nama_pengirim: '',
        no_hp_pengirim: '',
        alamat_pengirim: '',
        nama_penerima: '',
        no_hp_penerima: '',
        alamat_penerima: '',
        isi_kiriman: '',
        qty: '',
        berat_volume: '',
        berat_asli: '',
        biaya_kirim: '',
        biaya_packing: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('resi.store'))
    }

    return(
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Bukti Tanda Terima</h2>
                </div>
            }
        >
        <Head title="Projects" />
        <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div class="grid grid-cols-2 gap-12 mb-10">
                            <div
                            class=" border-gray-300 dark:border-gray-600"
                            >
                                <h4 className="mb-3"><strong>Pengirim</strong></h4>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="w-full">
                                        <InputLabel
                                        value="Nama"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="nama_pengirim"
                                        type="text"
                                        name="nama_pengirim"
                                        placeholder="Nama Pengirim"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('nama_pengirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.nama_pengirim} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value="No Hp"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="no_hp_pengirim"
                                        type="number"
                                        name="no_hp_pengirim"
                                        placeholder="Nomor Handphone / Nomor WA"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('no_hp_pengirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.no_hp_pengirim} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <InputLabel
                                        value="Alamat"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="alamat_pengirim"
                                        type="text"
                                        name="alamat_pengirim"
                                        placeholder="Alamat Pengirim"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('alamat_pengirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.alamat_pengirim} className="mt-2"/>
                                    </div>
                                </div>
                            </div>
                            <div
                            class="border-gray-300 dark:border-gray-600"
                            >
                                <h4 className="mb-3"><strong>Penerima</strong></h4>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="w-full">
                                        <InputLabel
                                        value="Nama"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="nama_penerima"
                                        type="text"
                                        name="nama_penerima"
                                        placeholder="Nama Penerima"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('nama_penerima', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.nama_penerima} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value="No Hp"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="no_hp_penerima"
                                        type="number"
                                        name="no_hp_penerima"
                                        placeholder="Nomor Handphone / Nomor WA"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('no_hp_penerima', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.no_hp_penerima} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <InputLabel
                                        value="Alamat"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="alamat_penerima"
                                        type="text"
                                        name="alamat_penerima"
                                        placeholder="Alamat Penerima"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('alamat_penerima', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.alamat_penerima} className="mt-2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-12">
                            <div
                            class=" border-gray-300 dark:border-gray-600"
                            >
                                <h4 className="mb-3"><strong>Detail Kiriman</strong></h4>
                                <div className="grid gap-4 sm:grid-cols-4 sm:gap-6">
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Isi Kiriman"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="isi_kiriman"
                                        type="text"
                                        name="isi_kiriman"
                                        placeholder="Isi Kiriman"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('isi_kiriman', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.isi_kiriman} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Qty/Koli"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="qty"
                                        type="number"
                                        name="qty"
                                        placeholder="Qty"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('qty', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.qty} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Berat Volume"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="berat_volume"
                                        type="number"
                                        name="berat_volume"
                                        placeholder="Berat Volume"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('berat_volume', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.berat_volume} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <InputLabel
                                        value="Berat Asli"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="berat_asli"
                                        type="number"
                                        name="berat_asli"
                                        placeholder="Berat Asli"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('berat_asli', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.berat_asli} className="mt-2"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                    <InputLabel
                                        value="Biaya Kirim"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="biaya_kirim"
                                        type="number"
                                        name="biaya_kirim"
                                        placeholder="Biaya Kirim"
                                        min="1000"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('biaya_kirim', e.target.value)}
                                        required
                                        />
                                        <InputError message={errors.biaya_kirim} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value={
                                            <>
                                              Biaya Packing <span className="text-red-500">(*jika ada packing)</span>
                                            </>
                                          }
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="biaya_packing"
                                        type="number"
                                        name="biaya_packing"
                                        placeholder="Biaya Packing"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('biaya_packing', e.target.value)}
                                        />
                                        <InputError message={errors.biaya_packing} className="mt-2"/>
                                    </div>
                                    <div className="w-full">
                                        <InputLabel
                                        value={
                                            <>
                                              Biaya Asuransi <span className="text-red-500">(*jika ada asuransi)</span>
                                            </>
                                          }
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        />
                                        <TextInput
                                        id="biaya_asuransi"
                                        type="number"
                                        name="biaya_asuransi"
                                        placeholder="Biaya Asuransi"
                                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        onChange={(e) => setData('biaya_asuransi', e.target.value)}
                                        />
                                        <InputError message={errors.biaya_asuransi} className="mt-2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={route('resi.index')} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-amber-500 rounded-lg focus:ring-4 focus:ring-amber-200 dark:focus:ring-amber-900 hover:bg-amber-600">
                            Batal
                        </Link>
                        <button type="submit" class="inline-flex ms-2 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-600">
                            Simpan
                        </button>

                        </form>
                    </div>
                </div>
        </div>
        </AuthenticatedLayout>
    )
}
