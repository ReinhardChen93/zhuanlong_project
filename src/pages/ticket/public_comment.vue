<template>
	<div id="public_comment">
		<div class="head">
			<img @click="back" src="../../../static/images/left_b.png" />
			<span>发表评价</span>
		</div>
		<div style="margin-top: 44px;">
			<div class="comment_object" v-if="has_adult">
				<img :src="data.ticket_info.adult_ticket.ticket_cover_url" alt="" />
				<div>
					<p>{{data.ticket_info.adult_ticket.ticket_name}}成人票</p>
					<p>{{data.ticket_info.adult_ticket.ticket_date}}</p>
					<p><span>¥{{data.ticket_info.adult_ticket.unit}}</span>/张</p>
				</div>
			</div>
			<div class="comment_object" v-if="has_student">
				<img :src="data.ticket_info.student_ticket.ticket_cover_url" alt="" />
				<div>
					<p>{{data.ticket_info.student_ticket.ticket_name}}学生票</p>
					<p>{{data.ticket_info.student_ticket.ticket_date}}</p>
					<p><span>¥{{data.ticket_info.student_ticket.unit}}</span>/张</p>
				</div>
			</div>
			<div class="comment_object" v-if="has_child">
				<img :src="data.ticket_info.child_ticket.ticket_cover_url" alt="" />
				<div>
					<p>{{data.ticket_info.child_ticket.ticket_name}}儿童票</p>
					<p>{{data.ticket_info.child_ticket.ticket_date}}</p>
					<p><span>¥{{data.ticket_info.child_ticket.unit}}</span>/张</p>
				</div>
			</div>
		</div>
		<div class="describe">
			<span>描述相符</span>
			<van-rate :size="20"  v-model="star" />
			<span>{{value*2}}.0</span>
		</div>
		<div class="comment">
			<textarea name="" rows="" cols="" v-model="content" @blur="filter_words" placeholder="很开心的一次出游"></textarea>
		</div>
		<div class="anonymous">
			<span>匿名</span>
			<van-switch v-model="anonymous" size="24px" active-color="#FF5A41" inactive-color="#B5B5B5"/>
		</div>
		<div class="commit" @click="submit">确认发表</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				star: 0,
				anonymous: false,
				content: '',
				words_array: [],
				data: {
					ticket_info: {
						adult_ticket: {},
						student_ticket: {},
						child_ticket: {}
					},
					tourist_info: {
						name: "",
						phone: ""
					},
					order_info: {
						ticket_no: "",
						order_id: 0,
						order_code: "",
						order_status: "",
						order_date: ""
					}
				},
				has_adult: false,
				has_student: false,
				has_child: false,
			}
		},
		mounted() {
			this.$http.post('sensitive/words/info/', {}).then(
				function(success) {
					// 处理成功的结果	
					this.words_array = success.body.data.words_array
				},
				function(err) {
					// 处理失败的结果
					console.log(err)
				});
			this.$http.post('tickets/order/detail', {
				order_id: this.$router.history.current.query.order_id,
			}).then(
				function(success) {
					// 处理成功的结果
					this.data = success.body.data;
					if(JSON.stringify(this.data.ticket_info.adult_ticket) != "{}") {
						this.has_adult = true;
						this.data.ticket_info.adult_ticket.ticket_date = this.data.ticket_info.adult_ticket.ticket_date.replace(/,/, ' ')
					}
					if(JSON.stringify(this.data.ticket_info.student_ticket) != "{}") {
						this.has_student = true;
						this.data.ticket_info.student_ticket.ticket_date = this.data.ticket_info.student_ticket.ticket_date.replace(/,/, ' ')
					}
					if(JSON.stringify(this.data.ticket_info.child_ticket) != "{}") {
						this.has_child = true;
						this.data.ticket_info.child_ticket.ticket_date = this.data.ticket_info.child_ticket.ticket_date.replace(/,/, ' ')
					}
				},
				function(err) {
					// 处理失败的结果
					console.log(err)
				});
		},
		methods: {
			back() {
				this.$router.push({
					path: '/CompleteOrder',
					query: {
						order_id: this.$router.history.current.query.order_id,
						customer_id: this.$router.history.current.query.customer_id,
					}
				})
			},
			filter_words() {
				//敏感词过滤
				var showContent = this.content;
				var arrMg = this.words_array;
				for(var i = 0; i < arrMg.length; i++) {
					var r = new RegExp(arrMg[i], "ig");
					showContent = showContent.replace(r, "**");
				}
				this.content = showContent
			},
			submit() {
				this.$http.post('tickets/order/comments', {
					star_nums: this.star,
					comments: this.content,
					scenic_id: this.$router.history.current.query.scenic_id,
					is_anonymous: this.anonymous,
					customer_id: this.$router.history.current.query.customer_id,
				}).then(
					function(success) {
						// 处理成功的结果
						if(success.body.code == 0) {
							this.$toast('评论成功！');
						} else {
							this.$toast(success.body.msg);
						}

					},
					function(err) {
						// 处理失败的结果
						console.log(err)
					});
			}
		}
	}
</script>

<style scoped="scoped">
	#public_comment {
		width: 100%;
		font-family: PingFangSC-Regular;
	}
	
	.head {
		height: 44px;
		line-height: 44px;
		padding: 0 16px;
		text-align: center;
		background: white;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
	}
	
	.head img {
		width: 21px;
		height: 20px;
		float: left;
		margin-top: 12px;
	}
	
	.head span {
		font-size: 17px;
		color: #030303;
		font-family: PingFangSC-Medium;
		font-weight: 600;
	}
	
	.comment_object {
		padding: 20px 16px;
		overflow: hidden;
	}
	
	.comment_object img {
		float: left;
		margin-right: 10px;
		width: 80px;
		height: 80px;
	}
	
	.comment_object div {
		float: left;
		padding-top: 4px;
	}
	
	.comment_object div p {
		font-size: 16px;
		color: #202020;
	}
	
	.comment_object div p:nth-of-type(2) {
		font-size: 14px;
		margin: 6px 0;
	}
	
	.comment_object div p:nth-of-type(3) {
		font-size: 12px;
		color: #262626;
	}
	
	.comment_object div p span {
		color: #E82004;
		font-size: 14px;
	}
	
	.describe {
		height: 28px;
		line-height: 28px;
		padding: 0 16px;
	}
	
	.describe span {
		font-size: 14px;
		color: #202020;
		vertical-align: middle;
	}
	
	.describe img {
		width: 24px;
		height: 24px;
		margin-left: 10px;
		vertical-align: middle;
	}
	
	.describe span:nth-of-type(2) {
		font-size: 16px;
		margin-left: 10px;
	}
	
	.comment {
		background: #F9F9F9;
		margin: 20px 16px;
		height: 109px;
		padding: 14px;
	}
	
	textarea {
		width: 100%;
		height: 100%;
		background: #F9F9F9;
		border: none;
		font-size: 14px;
		resize: none;
	}
	
	.comment_img {
		padding: 0 16px;
		overflow: hidden;
	}
	
	.comment_img img {
		width: 80px;
		height: 80px;
		float: left;
		margin-right: 20px;
		border-radius: 4px;
	}
	
	.comment_img span {
		border: 1px solid #F6F6F6;
		border-radius: 4px;
		width: 80px;
		height: 80px;
		text-align: center;
		line-height: 80px;
		display: inline-block;
		float: left;
		font-size: 12px;
		color: #9B9B9B;
	}
	
	.anonymous {
		overflow: hidden;
		padding: 0px 16px;
	}
	
	.anonymous span {
		font-size: 14px;
		color: #383838;
		float: left;
		line-height: 40px;
	}
	
	.anonymous img {
		float: right;
		width: 50px;
	}
	
	.commit {
		background: #FFCC00;
		border-radius: 4px;
		text-align: center;
		line-height: 40px;
		color: white;
		width: 89%;
		font-size: 16px;
		margin: 40px auto;
	}
</style>