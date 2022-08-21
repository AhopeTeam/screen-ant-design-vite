/*
 * @Description: 学习页面
 * @Author: 丁飞洋
 * @Date: 2022-08-20 15:40:37
 * @LastEditTime: 2022-08-21 16:58:21
 * @LastEditors: 丁飞洋
 */

import { string } from "vue-types";

//生命数组
let a: string[];
let b: Array<string>
//两种声明方式


//元组是长度固定的数组
let c: [string, string]
//这是只有两位的数组且值都为字符串形式的


//枚举属性
enum Gender {
    Male = 0,
    Female = 1
}
let d: { name: string, gender: Gender }
d = {
    name: '名字',
    gender: Gender.Male
}
//把存在可能的一一列举出来


//类型别名
type myType = 1 | 2 | 3 | 4 | 5 | 6
let e: 1 | 2 | 3 | 4 | 5 | 6
let f: myType
//这两种方式等同

//接口的使用
interface inter{
    length:number
}
function fn1(a:string):inter{
    const s = {
        length:22,
    }
    return s
}
//Ts可以在属性前面添加修饰符
//public 修饰符可以在任意位置访问与修改 默认值
//private 私有属性,只能在内部进行访问 
//protected  受包含的属性,只能在当前类和当前类的子类中访问
// const private name:string
(function () {
    class Person {
        constructor(public age: string) {

        }
        //访问
        // getName() {
        //     return this.name
        // }
        get name() {
            return this.name
        }
        //修改
        // setName(value: string) {
        //     this.name = value
        // }
        set name(value: string) {
            this.name = value
        }
    }
})
//泛型
//在定义函数或者类遇到类型不确定是可以使用
function fn<T>(a: T): T {
    return a
}
//使用接口定义泛型  
function fn2<T extends inter>(a: T): T {
    return a
}
//自动检测
fn(10)
//手动指定
fn<string>('你好')

