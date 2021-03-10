<template>
    <div style="padding: 0 20px">
      <table class="table-wrap">
        <thead>
          <tr style="height: 25px">
            <th
              v-for="(column, columnIndex) in tableColumns"
              :key="columnIndex"
            >
              {{ column.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, rowIndex) in tableData"
            :key="rowIndex"
            style="height: 25px"
          >
            <td
              v-for="(column, columnIndex) in tableColumns"
              :key="columnIndex"
            >
              <van-field v-model="row[column.prop]" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
export default {
    name: "dataTable",
    props:{
        tableData:{
            type:Array,
            default:() =>{
                return []
            }
        },
        tableColumns:{
            type:Array,
            default:()=>{
                return []
            }
        }
    }
}
</script>
<style scoped>
.table-wrap {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}
.table-wrap,
td,
th {
  text-align: center;
  border: 1px solid black;
}
.table-wrap th {
  padding: 4px;
}
.table-wrap /deep/ .van-cell {
  padding: 0 4px;
  font-size: 12px;
}
</style>