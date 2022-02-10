<?php

namespace App\Exports;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TemplateReport implements FromCollection, ShouldAutoSize, WithCustomStartCell, WithDrawings, WithEvents, WithHeadings,WithColumnWidths
{
    public $logs = [];
    public function __construct($logs)
    {
        $this->logs = $logs;
    }
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return $array = collect($this->logs)->map(function ($log, $key) {
            return [
                '#' => $key + 1,
                'Create Date' => date("d-m-Y", strtotime($log->CREATE_DATE)),
                'IA/IP Code' => $log->IP_CODE,
                'Customer Name' => $log->FIRST_NAME. ' ' .$log->LAST_NAME,
                'Tel' => $log->CONTACT_NUMBER,
                'Address' => $log->ADDRESS,
                'District/Khan' => $log->DISTRICT,
                'Province/City' => $log->PROVINCE,
                'Regional' => $log->BRANCH_CODE,
                'Regional Manager Name' => $log->MANAGER,
                'Age' => $log->DOB,
                'Sex' => $log->GENDER,
                // 'Relation with Customer' => $log->RELATION_CUST,
                'Estimate Customer Income/month' => $log->ESTIMATE_INCOME,
                'Customer Status' => $log->STATUS_NAME,
                'Products Recommendation' => $log->PRODUCT_CODE,
                'Customer Feedback' => $log->FEED_BACK,
                'Next step' => $log->NEXT_STEP,
                
            ];
        });
    }
    public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function (AfterSheet $event) {
                $i = 4;
                $event->sheet->getDelegate()->getRowDimension(1)->setRowHeight(70);
                $event->sheet->getDelegate()->mergeCells('A1:Q1');
                // cell 2
                $event->sheet->getDelegate()->setCellValue('A2', 'Lead Tracking Report');
                $event->sheet->getDelegate()->mergeCells('A2:Q2');
                $event->sheet->getDelegate()->getRowDimension(2)->setRowHeight(40);
                $event->sheet->getDelegate()->getStyle('A2:Q2')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ], 'alignment' => [
                        'vertical'     => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                        'horizontal'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                    ], 'font' => [
                        'size' => 16, 'bold' => true,
                    ], 'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => [
                            'rgb' => 'FFFF00'
                        ],
                        'endColor' => [
                            'argb' => 'FFFFFFFF'
                        ]
                    ],
                ]);
                $event->sheet->getDelegate()->setAutoFilter('A3:Q3');
                $event->sheet->getDelegate()->getRowDimension(3)->setRowHeight(40);
                $event->sheet->getDelegate()->getStyle('H')->applyFromArray([
                    'alignment' => [
                        'wrapText'     => TRUE
                    ]
                ]);
                $event->sheet->getDelegate()->getStyle('K')->applyFromArray([
                    'alignment' => [
                        'wrapText'     => TRUE
                    ]
                ]);
                $event->sheet->getDelegate()->getStyle('L')->applyFromArray([
                    'alignment' => [
                        'wrapText'     => TRUE
                    ]
                ]);
                $event->sheet->getDelegate()->getStyle('I:Q')->applyFromArray([
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical'     => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ], 
                ]);
                $event->sheet->getDelegate()->getStyle('A')->applyFromArray([
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical'     => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ], 
                ]);
                $event->sheet->getDelegate()->getStyle('A3:Q3')->applyFromArray([
                    'borders' => [
                        'allBorders' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                            'color' => ['argb' => '000000'],
                        ],
                    ], 'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
                        'vertical'     => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
                    ], 'font' => [
                        'size' => 11, 'bold' => true
                    ],
                ]);
                if (sizeof($this->logs) != 0) {
                    foreach ($this->logs as $log) {
                        $event->sheet->getDelegate()->getStyle('A' . $i . ':Q' . $i)->applyFromArray([
                            'borders' => [
                                'allBorders' => [
                                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                    'color' => ['argb' => '000000'],
                                ],
                            ],
                        ]);
                        
                        $i++;
                    }
                } else {
                    $event->sheet->getDelegate()->getStyle('A4:Q4')->applyFromArray([
                        'borders' => [
                            'allBorders' => [
                                'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                                'color' => ['argb' => '000000'],
                            ],
                        ],
                    ]);
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
    public function columnWidths(): array
    {
        return [
            // 'A'=> 5,
            // 'B'=> 20,
            // 'C'=> 15,
            // 'I' => 25,            
            // 'J' => 8,            
            // 'H' => 19,            
            // 'K' => 18,            
            // 'L' => 18,            
            // 'O' => 50,
                        
        ];
    }
    public function headings(): array
    {
        return ["#","Create Date","IA/IP Code","Customer Name", "Tel", "Address", "District/Khan", "Province/City", "Regional", "Regional Manager Name", "Age", "Sex", "Estimate Customer Income/month", "Customer Status", "Products Recommendation", "Customer Feedback", "Next step"];
    }
}
