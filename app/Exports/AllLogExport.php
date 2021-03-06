<?php

namespace App\Exports;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithHeadings;

class AllLogExport implements FromCollection, ShouldAutoSize, WithCustomStartCell, WithDrawings, WithEvents, WithHeadings
{

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $logs = DB::select("select *,TAGENT_CUST_LOGS.CREATE_DATE from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID where TAGENT_CUST_LOGS.CREATE_BY='" . Auth::user()->agent_code . "' ORDER BY TAGENT_CUST_LOGS.CREATE_DATE ASC;");

        return $array = collect($logs)->map(function ($log) {
            return [
                'Customer Name' => $log->FIRST_NAME . ' ' . $log->LAST_NAME,
                'Tel' => $log->CONTACT_NUMBER,
                'Address' => $log->ADDRESS,
                'District/Khan' => $log->DISTRICT,
                'Province/City' => $log->PROVINCE,
                'Regional' => $log->BRANCH_CODE,
                'Regional Manager Name' => 'N/A',
                'Age' => '18',
                'Sex' => $log->GENDER,
                'Relation with Customer' => $log->RELATION_CUST,
                'Estimate Customer Income/month' => $log->ESTIMATE_INCOME,
                'Customer Status' => $log->STATUS_NAME,
                'Products Recommendation' => $log->PRODUCT_CODE,
                'Customer Feedback' => $log->NAME,
                'Next step' => $log->NEXT_STEP
            ];
        });
    }
    // public function view(): View
    // {
    //     $logs = DB::select("select *,TAGENT_CUST_LOGS.CREATE_DATE from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID where TAGENT_CUST_LOGS.CREATE_BY='" . Auth::user()->agent_code . "' ORDER BY TAGENT_CUST_LOGS.CREATE_DATE ASC;");
    //     return view('report', [
    //         'logs' => $logs
    //     ]);
    // }
    public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function (AfterSheet $event) {
                $i = 4;
                $logs = DB::select("select *,TAGENT_CUST_LOGS.CREATE_DATE from TAGENT_CUST_LOGS inner join TAGENT_CUSTOMERS on CUSTOMER_ID = TAGENT_CUSTOMERS.ID inner join TAGENT_CUST_FEEDBACKS on CUST_FEEDBACK_CODE = TAGENT_CUST_FEEDBACKS.ID inner join TAGENT_STATUS on TAGENT_CUST_LOGS.STATUS = TAGENT_STATUS.ID where TAGENT_CUST_LOGS.CREATE_BY='" . Auth::user()->agent_code . "' ORDER BY TAGENT_CUST_LOGS.CREATE_DATE ASC;");
                $event->sheet->getDelegate()->getRowDimension(1)->setRowHeight(70);
                $event->sheet->getDelegate()->mergeCells('A1:O1');
                // cell 2
                $event->sheet->getDelegate()->setCellValue('A2', 'All Lead Report');
                $event->sheet->getDelegate()->mergeCells('A2:O2');
                $event->sheet->getDelegate()->getStyle('A2:O2')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ], 'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    ], 'font' => [
                        'size' => 16, 'bold' => true
                    ],
                ]);
                $event->sheet->getDelegate()->setAutoFilter('A3:O3');
                $event->sheet->getDelegate()->getStyle('A3:O3')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ],
                ]);
                foreach ($logs as $log) {
                    $event->sheet->getDelegate()->getStyle('A' . $i . ':O' . $i)->applyFromArray([
                        'borders' => [
                            'allBorders' => [
                                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                'color' => ['argb' => '000000'],
                            ],
                        ],
                    ]);
                    $i++;
                }
            },
        ];
    }
    public function drawings()
    {
        $drawing = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
        $drawing->setName('Logo');
        $drawing->setDescription('This is my logo');
        $drawing->setPath(public_path('asset/logo.png'));
        $drawing->setHeight(90);
        $drawing->setCoordinates('A1');

        return $drawing;
    }
    public function startCell(): string
    {
        return 'A3';
    }
    public function headings(): array
    {
        return ["Customer Name", "Tel", "Address", "District/Khan", "Province/City", "Regional", "Regional Manager Name", "Age", "Sex", "Relation with Customer", "Estimate Customer Income/month", "Customer Status", "Products Recommendation", "Customer Feedback", "Next step"];
    }
}
