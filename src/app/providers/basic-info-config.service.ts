import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoConfigService {
      
    constructor() {}

    //根据组件类型，获取视图组件初始化配置
    getCompDefaultConfig(style = 'text') {

        // TODO:获取接口写在后端,前端增加视图组件配置页面
        let data = {
            text: {
                compIndex: 2,
                name:'文本',
                type:'text',
                data: {
                    text_val:'双击修改文本',
                },
                style: {
                    height:100,
                    width: 100,
                    position: 'absolute',
                    top:400,
                    left:200,
                    border: '',
                    borderColor: '',
                    borderWidth: 0,
                    borderStyle: ''
                }
            },
            input: {
                compIndex: 2,
                name:'输入框',
                type:'input',
                data: {
                    input_val:'',
                    placeholder:"输入"
                },
                style: {
                    height:20,
                    width: 190,
                    position: 'absolute',
                    top:100,
                    left:500,
                    border: '',
                    borderColor: '',
                    borderWidth: 0,
                    borderStyle: ''
                }
            },
            textarea: {
                compIndex: 2,
                name:'多行输入',
                type:'textarea',
                data: {
                    textarea_val:'',
                    placeholder:"文本输入"
                },
                style: {
                    height:80,
                    width: 120,
                    position: 'absolute',
                    top:200,
                    left:500,
                    border: '',
                    borderColor: '',
                    borderWidth: 0,
                    borderStyle: ''
                }
            },
            img:  {
                compIndex: 2,
                name:'图片',
                type:'img',
                data: {
                    img_url:'./../assets/imgs/es.jpeg',
                },
                style: {
                    height:100,
                    width: 100,
                    position: 'absolute',
                    top:200,
                    left:100,
                    border: '',
                    borderColor: '',
                    borderWidth: 0,
                    borderStyle: ''
                }
            } ,    
            button:{
                compIndex: 3,
                name:'按钮',
                type:'button',
                data: {
                    button_val:'确认'
                },
                style: {
                  height:28,
                  width: 40,
                  position: 'absolute',
                  top:10,
                  left:400,
                  border: '',
                  borderColor: '',
                  borderWidth: 0,
                  borderStyle: ''
                }
            },
            chart:{
                compIndex: 3,
                name:'图表',
                type:'chart',
                data: {
            
                },
                style: {
                  height:180,
                  width: 500,
                  position: 'absolute',
                  top:10,
                  left:400,
                  border: '',
                  borderColor: '',
                  borderWidth: 0,
                  borderStyle: ''
                },
                event: {

                }
            },
          
            tree:{
                compIndex: 3,
                name:'结构树',
                type:'tree',
                data: {
                    api_val:'http://10.169.43.4:8100/api/dutys'
                },
                style: {
                  height:700,
                  width: 400,
                  position: 'absolute',
                  top:10,
                  left:400,
                  border: '',
                  borderColor: '',
                  borderWidth: 0,
                  borderStyle: ''
                }
            }
        }
        return data[style]  ? data[style] : {} 
    }

}