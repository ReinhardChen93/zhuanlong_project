<template>
	<div id="spot_detail">
		<div class="spot_img">
			<div class="head">
				<img @click="back" src="../../../static/images/left_b.png" />
				<span>{{detail.name}}</span>
				<img v-if="detail.is_collect" @click="collect" src="../../../static/images/collect_ticket.png" />
				<img v-if="!detail.is_collect" @click="collect" src="../../../static/images/collect.png" />
			</div>
			<div class="banner">
				<van-swipe :autoplay="3000" @change="onChange">
					<van-swipe-item v-for="(img,index) in detail.cover" :key="index">
						<img preview="1" :style="{'z-index':index==0?'9':'0'}" :src="img.cover_url">
					</van-swipe-item>
				</van-swipe>
				<span>{{img_index}}/{{img_length}}</span>
			</div>
		</div>
		<div class="spot_title">
			<p>{{detail.name}}</p>
			<p>开放时间：{{detail.begin_business_hours}}-{{detail.end_business_hours}}</p>
			<p>
				<img src="../../../static/images/dinw.png" alt="" />
				<span>{{detail.address}}</span>
			</p>
		</div>
		<div class="introduce">
			<h4>景区介绍</h4>
			<p>{{detail.desc}}</p>
		</div>
		<div class="ticket">
			<h4>景区门票</h4>
			<div v-if="detail.adult_price>0">
				<span>成人票</span>
				<el-date-picker v-model="date_adult" :editable='editable' :clearable='close' type="date" placeholder="选择日期" :picker-options="pickerOptions0" value-format="yyyy-MM-dd">
				</el-date-picker>
				<span>¥{{detail.adult_price}}</span>
				<img @touchstart="plus('adult')" src="../../../static/images/plus.png" />
				<input type="text" v-model="count_adult" @input='max_value_adult' />
				<img @touchstart="reduce('adult')" src="../../../static/images/reduce.png" />
			</div>
			<div v-if="detail.student_price>0">
				<span>学生票</span>
				<el-date-picker v-model="date_adult" :editable='editable' :clearable='close' type="date" placeholder="选择日期" :picker-options="pickerOptions0" value-format="yyyy-MM-dd">
				</el-date-picker>
				<span>¥{{detail.student_price}}</span>
				<img @touchstart="plus('student')" src="../../../static/images/plus.png" />
				<input type="text" v-model="count_student" @input='max_value_student' />
				<img @touchstart="reduce('student')" src="../../../static/images/reduce.png" />
			</div>
			<div v-if="detail.child_price>0">
				<span>儿童票</span>
				<el-date-picker v-model="date_adult" :editable='editable' :clearable='close' type="date" placeholder="选择日期" :picker-options="pickerOptions0" value-format="yyyy-MM-dd">
				</el-date-picker>
				<span>¥{{detail.child_price}}</span>
				<img @touchstart="plus('child')" src="../../../static/images/plus.png" />
				<input type="text" v-model="count_child" @input='max_value_child' />
				<img @touchstart="reduce('child')" src="../../../static/images/reduce.png" />
			</div>
		</div>
		<div class="comments">
			<p class="comment_num">
				<span>当前有{{detail.comments_nums}}条评论</span>
				<span>{{detail.star_nums}}.0</span>
				<span>
					<img v-for="it in detail.star_nums" src="../../../static/images/star_light.png" alt="" />
					<img v-if="star_num>0" v-for="it in star_num" src="../../../static/images/star.png" alt="" />
				</span>
			</p>
			<div class="comment" v-for="item in comment_array">
				<div class="commenter">
					<img class="commenter_avatar" :src="item.avatar" alt="" />
					<span>
						<span>{{item.name}}</span>
					<span v-if="item.gender=='女'"><img src="../../../static/images/female.png"/>{{item.age}}岁</span>
					<span v-if="item.gender=='男'" style="background:#688eff;"><img src="../../../static/images/male.png"/>{{item.age}}岁</span>
					</span>
					<span>
						<span>{{item.comment_time}}</span>
					<span></span>
					</span>
				</div>
				<p class="comment_content">{{item.content}}</p>
			</div>
			<p class="more" v-if='detail.comments_nums>3' @click="more">查看更多评论</p>
		</div>
		<div class="foot">
			<span><span>在线支付</span>￥25</span>
			<div>
				<span @click="submit">提交订单</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				close: false,
				editable: false,
				detail: {},
				img_length: 0,
				date_adult: '',
				date_student: '',
				date_child: '',
				count_adult: 0,
				count_student: 0,
				count_child: 0,
				star_num: 0,
				page: 1,
				img_index: 1,
				comment_array: [],
				pickerOptions0: {
					disabledDate(time) {
						let _now = Date.now(),
							seven = 7 * 24 * 60 * 60 * 1000,
							sevenDays = _now + seven;
						return time.getTime() < (_now - 24 * 60 * 60 * 1000) || time.getTime() >= sevenDays;
					}
				},
				flag: false,
				cur:{
					x: 0,
					y: 0
				},
				nx:0,
				ny:0,
				dx:0,
				dy:0,
				x:0,
				y:0,
			}
		},
		created() {
			var date = new Date();
			var mon = date.getMonth() + 1;
			if(mon <= 9) {
				mon = "0" + mon;
			}
			var day = date.getDate();
			if(day <= 9) {
				day = "0" + day;
			}
			this.date_adult = date.getFullYear() + "-" + mon + "-" + day;
			this.date_student = date.getFullYear() + "-" + mon + "-" + day;
			this.date_child = date.getFullYear() + "-" + mon + "-" + day;
		},
		mounted() {
			this.$http.post('tickets/detail', {
				scenic_id: 1,
				customer_id: 75
			}).then(
				function(success) {
					// 处理成功的结果
					this.detail = success.body.data.scenics;
					this.comment_array = success.body.data.comments;
					this.img_length = this.detail.cover.length;
					this.detail.scenic_remark = this.detail.scenic_remark.replace(/\r\n/g,"<br/>");
					this.star_num = 5 - this.detail.star_nums
				},
				function(err) {
					// 处理失败的结果
					console.log(err)
				});
			this.$previewRefresh()
		},
		methods: {
			collect() {
				this.$http.post('tickets/scenic/collect', {
					scenic_id:3,
					customer_id: 75
				}).then(
					function(success) {
						// 处理成功的结果
						if(success.body.code==0){
							this.$toast(success.body.msg);
							this.detail.is_collect=!this.detail.is_collect
						}else{
							this.$toast(success.body.msg);
						}
						
					},
					function(err) {
						// 处理失败的结果
						console.log(err)
					});
			},
			max_value_adult() {
				if(this.count_adult > 99) {
					this.count_adult = 99
				}
			},
			max_value_student() {
				if(this.count_student > 99) {
					this.count_student = 99
				}
			},
			max_value_child() {
				if(this.count_child > 99) {
					this.count_child = 99
				}
			},
			onChange(index) {
				this.img_index = index + 1;
			},
			more() {
				this.$http.post('tickets/order/comments/list', {
					scenic_id: 1,
					page_num: this.page + 1,
					per_page: 2,
				}).then(
					function(success) {
						// 处理成功的结果
						if(success.body.data.length == 0) {
							this.$toast('已加载完毕！');
						} else {
			
							let new_list = success.body.data;
							this.comment_array = this.comment_array.concat(new_list)
							this.page = this.page + 1;
						}
					},
					function(err) {
						// 处理失败的结果
						console.log(err)
					});
			},
			showCalendar() {
				this.calendar = true
			},
			back() {
				this.$router.push({
					path: '/ticket_home',
				})
			},
			plus(type) {
				if(type == 'adult') {
					this.count_adult++;
					if(this.count_adult > 99) {
						this.count_adult = 99
					}
				} else if(type == 'student') {
					this.count_student++;
					if(this.count_student > 99) {
						this.count_student = 99
					}
				} else {
					this.count_child++;
					if(this.count_child > 99) {
						this.count_child = 99
					}
				}
			},
			reduce(type) {
				if(type == 'adult') {
					this.count_adult--;
					if(this.count_adult < 0) {
						this.count_adult = 0
					}
				} else if(type == 'student') {
					this.count_student--;
					if(this.count_student < 0) {
						this.count_student = 0
					}
				} else {
					this.count_child--;
					if(this.count_child < 0) {
						this.count_child = 0
					}
				}
			},
			order() {
				this.$router.push({
					path: '/order',
					query: {
						customer_id: this.$router.history.current.query.customer_id,
						active: 2,
					}
				})
			},
			submit() {
				var count_adult = this.count_adult;
				var count_student = this.count_student;
				var count_child = this.count_child;
				if(this.count_adult == 0) {
					count_adult = -1;
				} else {
					count_adult = this.count_adult;
				}
				if(this.count_student == 0) {
					count_student = -1;
				} else {
					count_student = this.count_student;
				}
				if(this.count_child == 0) {
					count_child = -1;
				} else {
					count_child = this.count_child;
				}
				var order_array = [{
					adult: {
						price: this.detail.adult_price,
						count: count_adult,
						date: this.date_adult
					},
					student: {
						price: this.detail.student_price,
						count: count_student,
						date: this.date_adult
					},
					child: {
						price: this.detail.child_price,
						count: count_child,
						date: this.date_adult
					}
				}]
//				if(this.count_child == 0 && this.count_adult == 0 && this.count_student == 0) {
//					this.$toast('您还没选择所要购买的门票数量！');
//				} else {
					this.$router.push({
						path: '/write_order',
						query: {
//							scenic_id: 1,
//							customer_id: 75,
//							name: this.detail.name,
//							cover: this.detail.cover[0].cover_url,
//							order_array: JSON.stringify(order_array),
//							scenic_remark:this.detail.scenic_remark
						}
					})
//				}

			}
		}
	}
</script>

<style scoped="scoped">
	#spot_detail {
		font-family: PingFangSC-Regular;
		height: 100%;
	}
	
	.spot_img {
		position: relative;
		height: 230px;
		top: 44px;
	}
	
	.head {
		height: 44px;
		line-height: 44px;
		text-align: center;
		position: absolute;
		z-index: 11;
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		background: white;
		z-index: 999;
	}
	
	.head img {
		width: 14px;
		float: left;
		margin-top: 12px;
		margin-left: 16px;
		vertical-align: middle;
	}
	
	.head span {
		font-size: 17px;
		color: #030303;
		font-family: PingFangSC-Medium;
		font-weight: 600;
	}
	
	.head img:nth-of-type(2) {
		float: right;
		margin-left: 0;
		margin-right: 16px;
		width: 20px;
	}
	
	.banner {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	
	.banner img {
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
	}
	
	.banner span {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 12px;
		display: inline-block;
		width: 40px;
		height: 18px;
		text-align: center;
		line-height: 18px;
		color: white;
		font-size: 12px;
		position: absolute;
		bottom: 30px;
		left: 50%;
		margin-left: -20px;
		z-index: 11;
	}
	
	.spot_title {
		background: white;
		border-radius: 20px 20px 0 0px;
		padding: 15px 16px;
		position: relative;
		top: 20px;
		z-index: 11;
		border-bottom: 5px solid #f6f6f6;
	}
	
	.spot_title p img {
		width: 11px;
	}
	
	.spot_title p {
		font-size: 18px;
		color: #202020;
	}
	
	.spot_title p:nth-of-type(2) {
		font-size: 14px;
		margin: 7px 0;
	}
	
	.spot_title p:nth-of-type(3) {
		font-size: 14px;
		color: #B5B5B5;
	}
	
	.spot_title p img:nth-of-type(2) {
		float: right;
		width: 14px;
	}
	
	.introduce {
		padding: 10px 16px;
		border-bottom: 5px solid #f6f6f6;
		margin-top: 20px;
	}
	
	h4 {
		font-size: 16px;
		color: #202020;
		margin-bottom: 15px;
	}
	
	.introduce p {
		font-size: 14px;
		color: #353535;
		line-height: 20px;
	}
	
	.ticket {
		padding: 16px;
		line-height: 26px;
		border-bottom: 5px solid #f6f6f6;
	}
	
	.ticket div {
		border-top: 1px solid #F2F2F2;
		padding: 10px 0;
	}
	
	.ticket div span:nth-of-type(1) {
		font-size: 16px;
		color: #202020;
		margin-right: 5px;
	}
	
	.ticket div span:nth-of-type(2) {
		font-size: 16px;
		color: #E82004;
		margin-left: 7px;
	}
	
	.ticket div span:nth-of-type(3) {
		font-size: 12px;
		color: #B5B5B5;
		float: right;
		margin-right: 5px;
		line-height: 26px;
	}
	
	.ticket div input:nth-of-type(1) {
		float: right;
		width: 20px;
		text-align: center;
		border: none;
		outline: none;
		font-size: 14px;
		margin: 0 9px;
		margin-top: 2px;
	}
	
	.ticket div img {
		float: right;
		width: 20px;
		margin-top: 6px;
		cursor: pointer;
	}
	
	.foot {
		height: 50px;
		background: #FFFFFF;
		box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.05);
		padding: 0 16px;
		line-height: 50px;
	}
	
	.foot>span {
		font-size: 14px;
		color: #E82004;
		font-weight: bold;
	}
	
	.foot>span span {		
		color: #202020;
		margin-left: 8px;
		font-weight: normal;
	}
	
	.foot>div {
		float: right;
	}
	
	.foot>div span {
		width: 94px;
		height: 27px;
		margin-left: 14px;
		color: white;
		text-align: center;
		line-height: 27px;
		display: inline-block;
		background: #FF5A41;
		border-radius: 4px;
	}
	
	.order {
		width: 56px;
		height: 56px;
		position: absolute;
		top: 80%;
		left: 80%;
		z-index: 99;
	}
	
	.order img {
		width: 100%;
		height: 100%;
	}
	
	.comments {
		padding: 16px;
	}
	
	.comment_num span:nth-of-type(1) {
		font-size: 16px;
		color: #202020;
		font-weight: 600;
	}
	
	.comment_num img {
		width: 13px;
		height: 13px;
	}
	
	.comment_num span:nth-of-type(2) {
		float: right;
		color: #6b6b6b;
		margin-left: 10px;
	}
	
	.comment_num span:nth-of-type(3) {
		float: right;
	}
	
	.comment {
		padding: 20px 0;
		border-bottom: 1px solid #F2F2F2;
	}
	
	.commenter {
		height: 42px;
		margin-bottom: 15px;
	}
	
	.commenter_avatar {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		float: left;
		margin-right: 10px;
	}
	
	.commenter>span {
		float: left;
		height: 42px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	
	.commenter>span:nth-of-type(1) span:nth-of-type(1) {
		font-size: 16px;
		color: #555555;
		font-weight: bold;
	}
	
	.commenter>span:nth-of-type(1) span:nth-of-type(2) {
		font-size: 14px;
		color: #555555;
		display: inline-block;
		width: 50px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		color: white;
		background: #FF9FA4;
		border-radius: 8.5px;
		font-size: 12px;
		padding: 1px 5px;
	}
	
	.commenter>span:nth-of-type(1) img {
		width: 11px;
		vertical-align: middle;
		margin-right: 3px;
	}
	
	.commenter>span:nth-of-type(2) {
		float: right;
	}
	
	.commenter>span:nth-of-type(2) span {
		font-size: 12px;
		color: #B5B5B5;
	}
	
	.commenter>span:nth-of-type(2) span:nth-of-type(1) {
		font-size: 14px;
	}
	
	.comment_content {
		font-size: 14px;
		color: #565656;
		line-height: 20px;
	}
	
	.more {
		font-size: 15px;
		color: #565656;
		text-align: center;
		padding: 15px 0;
	}
</style>