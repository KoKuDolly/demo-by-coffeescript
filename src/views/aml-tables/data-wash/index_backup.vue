<template>
  <div>
    <el-table
      :data="tableData"
      :stripe="true"
      :border="true"
      max-height="200"
    >
      <template v-for="(item, index) in tableColumns">
        <template v-if="item.key === 'deletion_attr'">
          <el-table-column
            :key="index"
            :prop="item.key"
            :label="$t('dataWash.deletion_attr')"
          >
            <template slot-scope="scope">
              <el-select
                v-model="portTableOneData[scope.$index][item.key]"
                @change="handleDeletionAttrSelect(portTableOneData[scope.$index][item.key], scope)"
              >
                <el-option
                  v-for="(_item, _index) in scope.row[item.key]"
                  :key="_index"
                  :label="_item.cnName"
                  :value="_item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.key === 'handle_func'">
          <el-table-column
            :key="index"
            :prop="item.key"
            :label="$t('dataWash.handle_func')"
          >
            <template slot-scope="scope">
              <el-select
                v-model="portTableOneData[scope.$index][item.key]"
                @change="handleDeletionAttrSelect(portTableOneData[scope.$index][item.key], scope)"
              >
                <el-option
                  v-for="(_item, _index) in scope.row[item.key]"
                  :key="_index"
                  :label="_item.cnName"
                  :value="_item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.key === 'result'">
          <el-table-column
            :key="index"
            :prop="item.key"
            :label="$t('dataWash.result')"
          >
            <template slot-scope="scope">
              <el-input
                v-model="portTableOneData[scope.$index][item.key]"
                @blur="handleDeletionAttrSelect(portTableOneData[scope.$index][item.key], scope)"
              />
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            :key="index"
            :prop="item.key"
            :label="$t('dataWash.handle_coloumns')"
          >
            <!-- <template slot-scope="scope">

            </template> -->
          </el-table-column>
        </template>
      </template>
    </el-table>
  </div>
</template>
<script>
import { sapRepeat } from '../data/data'
export default {
  name: 'dataWash',
  mounted () {
    this.init()
  },
  data () {
    return {
      portTableOneData: [],
      tableColumns: [
        {
          key: 'deletion_attr',
          title: '缺失值处理'
        },
        {
          key: 'handle_func',
          title: '处理方法'
        },
        {
          key: 'result',
          title: '替换为'
        },
        {
          key: 'handle_coloumns',
          title: '+'
        }
      ],
      tableData: [
        {
          deletion_attr: [
            {
              cnName: '缺失属性1',
              enName: 'delation_attr_1',
              value: '10'
            },
            {
              cnName: '缺失属性2',
              enName: 'delation_attr_2',
              value: '11'
            }
          ],
          handle_func: [
            {
              cnName: '替换',
              enName: 'instead',
              value: 0
            },
            {
              cnName: '舍弃',
              enName: 'throw_it',
              value: 1
            }
          ],
          result: 10
        },
        {
          deletion_attr: [
            {
              cnName: '缺失属性1',
              enName: 'delation_attr_1',
              value: '10'
            },
            {
              cnName: '缺失属性2',
              enName: 'delation_attr_2',
              value: '11'
            }
          ],
          handle_func: [
            {
              cnName: '替换',
              enName: 'instead',
              value: 0
            },
            {
              cnName: '舍弃',
              enName: 'throw_it',
              value: 1
            }
          ],
          result: 10
        }
      ]
    }
  },
  methods: {
    init () {
      this.initPortTableOneData()
      this.handleTransData()
    },
    handleTransData () {
      // sapRepeat 这个是返回数据中去重的那个值，其他类似吧
      // 深拷贝
      const source = Object.assign({}, sapRepeat)
      // 构建想要的数据结构，空架子
      let arr = []
      Object.keys(source).forEach((attr, index) => {
        if (index === 0) {
          let value = source[attr].split(',')
          value.forEach((v, i) => {
            arr.push({
              index_row: i
            })
          })
        }
      })
      // 往里面塞值
      Object.keys(source).forEach((attr, index) => {
        let value = source[attr].split(',')
        value.forEach((v, i) => {
          arr[i] = Object.assign({}, arr[i], { [attr]: v })
        })
      })
    },
    initPortTableOneData () {
      this.portTableOneData = this.tableData.map((ov, oi) => {
        const keys = Object.keys(ov)
        if (ov === undefined) {
          let obj = {}
          keys.forEach(value => {
            obj[value] = ''
          })
          obj.rowIndex = 1
          return obj
        } else {
          let obj = {}
          keys.forEach(value => {
            obj[value] = ''
          })
          obj.rowIndex = 1
          return obj
        }
      })
      // console.log(this.portTableOneData)
    },
    handleDeletionAttrSelect (row, scope) {
      console.log(row, scope, this.portTableOneData)
      console.log(this.tableData)
    }
  }
}
</script>
<style lang="scss">

</style>
