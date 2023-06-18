import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { CountryTableHeaders,Country,CountryData } from './model/country';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'table-edit-with-MatTable';
  ColumnKey: string[] = CountryTableHeaders.map((col)=> col.key)
  columnsSchema: any = CountryTableHeaders
  dataSource = new MatTableDataSource<Country>()
  valid: any = {}

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
      this.dataSource.data = CountryData;
  }

  editRow(row: Country) {
    if (row.id === 0) {
        row.isEdit = false
    } else {
      this.dataSource.data = CountryData;
    row.isEdit = false
    }
  }

  addRow() {
    const newRow: Country = {
      id: 0,
      name: '',
      capital: '',
      iso2: '',
      iso3: '',
      isEdit: true,
      isSelected: false,
    }
    this.dataSource.data = [newRow, ...this.dataSource.data]
  }

  removeRow(id: number) {
    this.dataSource.data = this.dataSource.data.filter(
      (c: Country) => c.id !== id,)
  }

  removeSelectedRows() {
    const country = this.dataSource.data.filter((c: Country) => c.isSelected)
    this.dataSource.data = this.dataSource.data.filter(
      (c: Country) => !c.isSelected,
    )
  }

refreshRow() {
  this.dataSource.data = CountryData;
}

  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {}
    }
    this.valid[id][key] = e.target.validity.valid
  }

  disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false)
    }
    return false
  }

  isAllSelected() {
    return this.dataSource.data.every((item) => item.isSelected)
  }

  isAnySelected() {
    return this.dataSource.data.some((item) => item.isSelected)
  }

  selectAll(event: any) {
    this.dataSource.data = this.dataSource.data.map((item) => ({
      ...item,
      isSelected: event.checked,
    }))
  }
}
