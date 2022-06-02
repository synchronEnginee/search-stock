import React from 'react';
import ExcelJS from 'exceljs';

type DownloadExcelProps = {
  data: Array<object>;
};

const DownloadExcelButton: React.FC<DownloadExcelProps> = ({ data }) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('sheet1', {});
  let rowCount = 1;
  let sheetRow = worksheet.getRow(rowCount);
  for (const item of data) {
    let columnCount = 1;
    for (const value of Object.values(item)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      sheetRow.getCell(columnCount).value = value;
      columnCount += 1;
    }
    rowCount += 1;
    sheetRow = worksheet.getRow(rowCount);
  }
  const uint8Array = workbook.xlsx.writeBuffer();
  const blob = new Blob([uint8Array], { type: 'application/octet-binary' });

  return <div>DownloadExcel</div>;
};

export default DownloadExcelButton;
