
export default {
    //仓库名字
    namespace: 'borrower',
    //仓库
    state: {
        tabBars: [{
            name: "王*",
            idcard: "证件号码：3*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：8100元",
            key: "1"
        }, {
            name: "李*加",
            idcard: "证件号码：4*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：2500元",
            key: "2"
        }, {
            name: "孙*",
            idcard: "证件号码：6*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：1600元",
            key: "3"
        }, {
            name: "窦*枫",
            idcard: "证件号码：3*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：12000元",
            key: "4"
        }, {
            name: "赵*",
            idcard: "证件号码：8*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：10100元",
            key: "5"
        }, {
            name: "沈*鸿",
            idcard: "证件号码：2*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：9700元",
            key: "6"
        }]
    },
    //reducers跟dispatch 里面的type
    reducers: {
        editAuthor(state, action) {
            console.log(state.tabBar)
            //把旧的仓库值放进去，并且把新的仓库值也放进取
            state.tabBar = [...state, ...action.payload];
            return { ...state }
        },

    },

};