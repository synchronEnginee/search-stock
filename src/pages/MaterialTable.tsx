import './styles.css';
import React, { useState } from 'react';
import MaterialTable from 'material-table';

const MaterialTableFunc = () => {
  type IType =
    | 'string'
    | 'boolean'
    | 'numeric'
    | 'date'
    | 'datetime'
    | 'time'
    | 'currency';
  const string: IType = 'string';

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name', type: 'string' as const },
    {
      title: 'Surname',
      field: 'surname',
      initialEditValue: 'initial edit value',
      type: 'string' as const,
    },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' as const },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      type: 'string' as const,
    },
  ]);

  const [data, setData] = useState([
    {
      name: 'Mehmet',
      surname: 'Baran',
      birthYear: 1987,
      birthCity: 63,
      type: string,
    },
    {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34,
      type: string,
    },
  ]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />

      <MaterialTable
        title="送信されたファイル"
        columns={[
          {
            title: 'メール題名',
            field: 'emailTitle',
          },
          {
            title: 'ファイル名',
            field: 'fileName',
          },
          {
            title: '送信日時',
            field: 'timeSent',
          },
          {
            title: '企業名',
            field: 'companyName',
            defaultGroupOrder: 0,
          },
        ]}
        data={[
          {
            emailTitle: 'Email title 1',
            fileName: 'ふぁいる名、めっちゃ長いやつ',
            timeSent: '2021/1/20 17:30',
            companyName: 'Blah Blah Blah 株式会社',
          },
          {
            emailTitle: 'Email title 2',
            fileName: 'ふぁいる名、めっちゃ長いやつ 2',
            timeSent: '2021/1/20 16:30',
            companyName: 'Blah Blah Blah 株式会社',
          },
          {
            emailTitle: 'Email title 3',
            fileName: 'ふぁいる名、めっちゃ長いやつ 2',
            timeSent: '2021/1/20 16:30',
            companyName: 'ほんにゃら 株式会社',
          },
          {
            emailTitle: 'Email title 4',
            fileName: 'ふぁいる名、めっちゃ長いやつ 2',
            timeSent: '2021/1/20 16:30',
            companyName: 'ほんにゃら 株式会社',
          },
        ]}
        options={{
          grouping: true,
        }}
      />
    </div>
  );
};
