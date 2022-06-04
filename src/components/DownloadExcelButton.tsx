import React from 'react';
import ExcelJS from 'exceljs';

type DownloadExcelProps = {
  data: Array<object>;
};

const downloadExcel = async (stockTable: Array<object>) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('sheet1', {});
  let rowCount = 1;
  let sheetRow = worksheet.getRow(rowCount);
  for (const item of stockTable) {
    let columnCount = 1;
    for (const value of Object.values(item)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      sheetRow.getCell(columnCount).value = value;
      columnCount += 1;
    }
    rowCount += 1;
    sheetRow = worksheet.getRow(rowCount);
  }
  const uint8Array = await workbook.xlsx.writeBuffer();
  const blob = new Blob([uint8Array], { type: 'application/octet-binary' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = '株比較.xlsx';
  link.click();
};

const DownloadExcelButton: React.FC<DownloadExcelProps> = ({ data }) => {
  const downloadExcelButtonClick = () => downloadExcel(data);

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <button type="button" onClick={() => downloadExcelButtonClick()}>
      エクセルダウンロード
    </button>
  );
};

export default DownloadExcelButton;
