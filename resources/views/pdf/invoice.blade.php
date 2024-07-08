<!-- Favicons -->
<link href="{{ asset('assets/img/favicon.png') }}" rel="icon">
<link href="{{ asset('assets/img/apple-touch-icon.png') }}" rel="apple-touch-icon">

<!-- Google Fonts -->
<link href="https://fonts.gstatic.com" rel="preconnect">
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

<!-- Vendor CSS Files -->
<link href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/quill/quill.snow.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/quill/quill.bubble.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/remixicon/remixicon.css') }}" rel="stylesheet">
<link href="{{ asset('assets/vendor/simple-datatables/style.css') }}" rel="stylesheet">

<!-- Template Main CSS File -->
<link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>


<head>
    <title>BTT - {{ $resi->no_resi }}</title>
    <script type="text/javascript">
        function generateBarCode() {
            var nric = $('#text').val();
            console.log(nric);
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=50x50';
            $('#barcode').attr('src', url);
        }
    </script>
</head>

<!-- LEMBAR 1 -->
<section class="section" id="lbr1">
    <div class="col-lg-12">
        <table class="table">
            <!-- HEADER -->
            <thead>
                <tr>
                    <th width="49%"style="vertical-align: middle;"><span style="font-size:10px;"><b>HANKAM
                                AGEN</b></span><br>
                        <span style="font-size:6px;">JL RAYA HANKAM NO.7E RT.006 RW.009</span><br>
                        <span style="font-size:6px;">BEKASI KOTA, PONDOK MELATI, JATIWARNA, 17415</span><br>
                        <span style="font-size:6px;"><b></b>081286068110</b></span>
                    </th>
                    <th style="font-size:20px;text-align:center;vertical-align: middle;"><span
                            style="font-size:20px;vertical-align: middle;"><b>{{ $resi->no_resi }}</b><br><span
                                style="font-size:10px;">{{ (new \Carbon\Carbon($resi->created_at))->format('d/m/Y') }}</span>
                    </th>
                    <th width="49%" style="text-align:right;">
                        <img src="{{ asset('assets/img/logo-kop.png') }}" alt="" height="50" width="125"
                            onclick="window.print();">
                    </th>
                </tr>
            </thead>
            <tr>
                <td colspan="3" style="padding:0px;margin:0px;border-spacing:0px;">

                    <table class="table table-bordered table-sm" style="font-size:10px;">
                        <tr>
                            <!--PENGIRIM-->
                            <td width="50%" style="padding:0px;margin:0px;border-spacing:0px;">
                                <table class="table table-borderless table-sm" style="font-size:10px;">
                                    <tr>
                                        <td colspan="4"><b>Pengirim / <i>Shipper</i></b></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" width="30%" colspan="2"
                                            style="padding:0px;margin:0px;">&nbsp;&nbsp;Nama / <i>Name</i></td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->nama_pengirim }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Telp /
                                            <i>Phone</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->no_hp_pengirim }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Alamat /
                                            <i>Address</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->alamat_pengirim }}</td>
                                    </tr>
                                    {{-- <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Kota /
                                            <i>City</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">DKI JAKARTA, JAKARTA TIMUR, CIPAYUNG,
                                            CIPAYUNG, 13840</td>
                                    </tr> --}}
                                </table>
                            </td><!--END PENGIRIM-->

                            <!--PENERIMA-->
                            <td width="50%" style="padding:0px;border-spacing:0px;">
                                <table class="table table-borderless table-sm" style="font-size:10px;">
                                    <tr>
                                        <td colspan="4"><b>Penerima / <i>Consigne</i></b></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" width="30%" colspan="2">
                                            &nbsp;&nbsp;Nama / <i>Name</i></td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->nama_penerima }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Telp /
                                            <i>Phone</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->no_hp_penerima }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Alamat /
                                            <i>Address</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->alamat_penerima }}</td>
                                    </tr>
                                    {{-- <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Kota /
                                            <i>City</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">JAWA TENGAH, BREBES, KETANGGUNGAN,
                                            KETANGGUNGAN, 52263</td>
                                    </tr> --}}
                                </table>
                            </td><!--END PENERIMA-->
                        </tr>

                        <!--BARANG-->
                        <tr>
                            <td colspan="2" width="50%" style="padding:0px;margin:0px;border-spacing:0px;">
                                <table class="table table-bordered table-sm"
                                    style="font-size:10px;padding:0px;margin:0px;border-spacing:0px;">
                                    <tr>
                                        <td width="50%" align="center"><b>Isi Kiriman</b><br>/ <i>Description</i>
                                        </td>
                                        <td align="center"><b>Jml</b><br>/ <i>Colly</i></td>
                                        <td align="center"><b>Berat</b><br>/ <i>Weight</i></td>
                                        <td align="center"><b>Volume</b><br>/ <i>Volume</i></td>
                                        <td align="center"><b>Nilai Barang</b><br>/ <i>Goods Amount</i></td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ $resi->isi_kiriman }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ $resi->qty }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ number_format($resi->berat_asli, 2, '.', '') }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ number_format($resi->berat_volume, 2, '.', '') }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr><!--END BARANG-->

                        <!--BIAYA-->
                        <tr>
                            <td width="50%" style="padding:0px;margin:0px;border-collapse: collapse;">
                                <table class="table table-borderless table-sm"
                                    style="font-size:10px;padding:0px;margin:0px;border-spacing:0px;">
                                    <tr>
                                        <td width="50%" colspan="4" style="vertical-align:middle;"
                                            class="table-secondary"><b>TARIF</b> <br> &nbsp;
                                            <!-- (Harga Sudah Termasuk PPn) -->
                                        </td>
                                    </tr><!--END BIAYA-->

                                    <tr>
                                        <td>BIAYA KIRIM</td>
                                        <td>JIKA ALAMAT KURANG JELAS HARAP HUBUNGIN PENERIMA</td>
                                        <td>Rp. </td>
                                        <td align="right">{{ number_format($resi->biaya_kirim, 0, '.', ',') }}</td>
                                    </tr>
                                    <tr>
                                        <td>BIAYA PACKING</td>
                                        <td></td>
                                        <td>Rp. </td>
                                        <td align="right">{{ number_format($resi->biaya_packing, 0, '.', ',') }}</td>
                                    </tr>
                                    <tr>
                                        <td>BIAYA KIRIM</td>
                                        <td></td>
                                        <td>Rp. </td>
                                        <td align="right">{{ number_format($resi->biaya_asuransi, 0, '.', ',') }}
                                        </td>
                                    </tr>
                                    @php
                                        $total = $resi->biaya_kirim + $resi->biaya_asuransi + $resi->biaya_packing;
                                    @endphp
                                    <tr>
                                        <td style="vertical-align:middle;"><b>TOTAL</b><br><i>Total Amount</i></td>
                                        <td style="vertical-align:middle;"><b></b></td>
                                        <td style="vertical-align:middle;"><b>Rp. </b></td>
                                        <td align="right" style="vertical-align:middle;">
                                            <b>{{ number_format($total, 0, '.', ',') }}</b>
                                        </td>
                                    </tr>
                                </table>
                            </td>

                            <td width="50%" style="padding:0px;margin:0px;border-collapse: collapse;">
                                <table class="table table-bordered table-sm"
                                    style="font-size:10px;padding:0px;margin:0px;border-collapse: collapse;">
                                    <tr>
                                        <td colspan="3" width="50%" align="center"
                                            style="font-size:9px;vertical-align:middle"><i>Pengirim menyatakan bahwa
                                                keterangan yang dicetak adalah benar, dan menyetujui pedoman pengiriman
                                                PT. Nusantara Express Transportindo</i></td>
                                    </tr>
                                    <tr class="table-dark">
                                        <td align="center" style="font-size:8px;vertical-align:middle">Pelacakan</td>
                                        <td width="33%" align="center"
                                            style="font-size:8px;vertical-align:middle">Diserahkan oleh</td>
                                        <td width="33%" align="center"
                                            style="font-size:8px;vertical-align:middle">Diterima oleh</td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="vertical-align:middle;"><img
                                                src="https://api.qrserver.com/v1/create-qr-code/?data=Dalam Pengembangan"
                                                alt="" width="80" height="80" /></td>
                                        <td width="33%" align="center"
                                            style="font-size:8px;vertical-align:middle">
                                            <b><br><br><br><br><br><br><br><br>Pengirim</b>
                                        </td>
                                        <td width="33%" align="center"
                                            style="font-size:8px;vertical-align:middle">
                                            <b><br><br><br><br><br><br><br><br>NEXT</b>
                                        </td>
                                    </tr>

                                </table>
                            </td>

                        </tr><!--BIAYA-->


                    </table>
                </td>
            </tr>
        </table>
    </div>
</section><!-- END LEMBAR 1 -->



<hr style="border : dashed 1px;">


<!-- LEMBAR 1 -->
<section class="section" id="lbr1">
    <div class="col-lg-12">
        <table class="table">
            <!-- HEADER -->
            <thead>
                <tr>
                    <th width="49%"style="vertical-align: middle;"><span style="font-size:10px;"><b>HANKAM
                                AGEN</b></span><br>
                        <span style="font-size:6px;">JL RAYA HANKAM NO.7E RT.006 RW.009</span><br>
                        <span style="font-size:6px;">BEKASI KOTA, PONDOK MELATI, JATIWARNA, 17415</span><br>
                        <span style="font-size:6px;"><b></b>081286068110</b></span>
                    </th>
                    <th style="font-size:20px;text-align:center;vertical-align: middle;"><span
                            style="font-size:20px;vertical-align: middle;"><b>{{ $resi->no_resi }}</b><br><span
                                style="font-size:10px;">{{ (new \Carbon\Carbon($resi->created_at))->format('d/m/Y') }}</span>
                    </th>
                    <th width="49%" style="text-align:right;">
                        <img src="{{ asset('assets/img/logo-kop.png') }}" alt="" height="50"
                            width="125" onclick="window.print();">
                    </th>
                </tr>
            </thead>
            <tr>
                <td colspan="3" style="padding:0px;margin:0px;border-spacing:0px;">

                    <table class="table table-bordered table-sm" style="font-size:10px;">
                        <tr>
                            <!--PENGIRIM-->
                            <td width="50%" style="padding:0px;margin:0px;border-spacing:0px;">
                                <table class="table table-borderless table-sm" style="font-size:10px;">
                                    <tr>
                                        <td colspan="4"><b>Pengirim / <i>Shipper</i></b></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" width="30%" colspan="2"
                                            style="padding:0px;margin:0px;">&nbsp;&nbsp;Nama / <i>Name</i></td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->nama_pengirim }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Telp /
                                            <i>Phone</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->no_hp_pengirim }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Alamat /
                                            <i>Address</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->alamat_pengirim }}</td>
                                    </tr>
                                    {{-- <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Kota /
                                            <i>City</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">DKI JAKARTA, JAKARTA TIMUR, CIPAYUNG,
                                            CIPAYUNG, 13840</td>
                                    </tr> --}}
                                </table>
                            </td><!--END PENGIRIM-->

                            <!--PENERIMA-->
                            <td width="50%" style="padding:0px;border-spacing:0px;">
                                <table class="table table-borderless table-sm" style="font-size:10px;">
                                    <tr>
                                        <td colspan="4"><b>Penerima / <i>Consigne</i></b></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" width="30%" colspan="2">
                                            &nbsp;&nbsp;Nama / <i>Name</i></td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->nama_penerima }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Telp /
                                            <i>Phone</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->no_hp_penerima }}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Alamat /
                                            <i>Address</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">{{ $resi->alamat_penerima }}</td>
                                    </tr>
                                    {{-- <tr>
                                        <td style="padding:0px;margin:0px;" colspan="2">&nbsp;&nbsp;Kota /
                                            <i>City</i>
                                        </td>
                                        <td style="padding:0px;margin:0px;" width="1%">: </td>
                                        <td style="padding:0px;margin:0px;">JAWA TENGAH, BREBES, KETANGGUNGAN,
                                            KETANGGUNGAN, 52263</td>
                                    </tr> --}}
                                </table>
                            </td><!--END PENERIMA-->
                        </tr>

                        <!--BARANG-->
                        <tr>
                            <td colspan="2" width="50%" style="padding:0px;margin:0px;border-spacing:0px;">
                                <table class="table table-bordered table-sm"
                                    style="font-size:10px;padding:0px;margin:0px;border-spacing:0px;">
                                    <tr>
                                        <td width="50%" align="center"><b>Isi Kiriman</b><br>/ <i>Description</i>
                                        </td>
                                        <td align="center"><b>Jml</b><br>/ <i>Colly</i></td>
                                        <td align="center"><b>Berat</b><br>/ <i>Weight</i></td>
                                        <td align="center"><b>Volume</b><br>/ <i>Volume</i></td>
                                        <td align="center"><b>Nilai Barang</b><br>/ <i>Goods Amount</i></td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ $resi->isi_kiriman }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ $resi->qty }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ number_format($resi->berat_asli, 2, '.', '') }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;">
                                            {{ number_format($resi->berat_volume, 2, '.', '') }}</td>
                                        <td align="center" style="font-size:12px;padding:10px;margin:10px;"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr><!--END BARANG-->

                        <!--BIAYA-->
                        <tr>
                            <td width="50%" style="padding:0px;margin:0px;border-collapse: collapse;">
                                <table class="table table-borderless table-sm"
                                    style="font-size:10px;padding:0px;margin:0px;border-spacing:0px;">
                                    <tr>
                                        <td width="50%" colspan="4" style="vertical-align:middle;"
                                            class="table-secondary"><b>MANIFEST</b> <br>&nbsp;</td>
                                    </tr><!--END BIAYA-->

                                    <tr>
                                        <td>{{ $resi->isi_kiriman }}</td>
                                        <td width="1%">x </td>
                                        <td align="right">{{ $resi->qty }}</td>
                                        <td width="10%"></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                    </tr>

                                </table>
                            </td>

                            <td width="50%" style="padding:0px;margin:0px;border-collapse: collapse;">
                                <table class="table table-bordered table-sm"
                                    style="font-size:10px;padding:0px;margin:0px;border-collapse: collapse;">
                                    <tr>
                                        <td colspan="3" width="50%" align="center"
                                            style="font-size:9px;vertical-align:middle"><i>Pengirim menyatakan bahwa
                                                keterangan yang dicetak adalah benar, dan menyetujui pedoman pengiriman
                                                PT. Nusantara Express Transportindo</i></td>
                                    </tr>
                                    <tr class="table-dark">
                                        <td width="50%" align="center"
                                            style="font-size:8px;vertical-align:middle">Diserahkan oleh</td>
                                        <td width="50%" align="center"
                                            style="font-size:8px;vertical-align:middle">Diterima dengan baik oleh</td>
                                    </tr>
                                    <tr>
                                        <td width="50%" align="center"
                                            style="font-size:8px;vertical-align:middle">
                                            <b><br><br><br><br><br><br><br><br>NEXT</b>
                                        </td>
                                        <td width="50%" align="center"
                                            style="font-size:8px;vertical-align:middle">
                                            <b><br><br><br><br><br><br><br><br>Penerima</b>
                                        </td>
                                    </tr>

                                </table>
                            </td>

                        </tr><!--BIAYA-->


                    </table>
                </td>
            </tr>
        </table>
    </div>
</section><!-- END LEMBAR 1 -->
