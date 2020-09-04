import React,{useEffect} from 'react';
import {Link,Events} from "react-scroll";


import Content from 'Components/Content';
import SectonTitle from 'Components/SectonTitle';
import Code from 'Components/Code';
import Sample from 'Components/Sample';
import {useUi} from 'Components/context'



const Table = () => {
	const {sideNavWebs} = useUi();
    return(
        <>
            <Content title="Table">
				<div className="row">
					<Sample>  
						<div className="col-12">
							<div className="row no-gutters border">
								<table class="sTable bg-white ">
									<colgroup>
										<col width="10%"/>
										<col width="13%"/>
										<col width="13%"/>
										<col width="13%"/>
										<col width="13%"/>
										<col width="13%"/>
										<col width="13%"/>
										<col />
									</colgroup>
									<thead>
										<tr className="font-12 bg-border">
											<th scope="col" className="text-center d-flex align-items-md-center justify-content-center">
												센터 <button className="btn down ml-2" title="센터 전체 보기"></button>
												{/* <button className="btn up" title="센터 간략 보기"></button> */}
											</th>
											<th scope="col" className="text-center">출고지시</th>
											<th scope="col" className="text-center">피팅</th>
											<th scope="col" className="text-center">검수패킹</th>
											<th scope="col" className="text-center">미배송</th>
											<th scope="col" className="text-center">답변대기</th>
											<th scope="col" className="text-center">처리중</th>
											<th scope="col" className="text-center">답변완료</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" className="text-center font-weight-normal">동탄</th>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right font-weight-normal" lang="en">30</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right font-weight-normal" lang="en">1</td>
											<td className="text-right font-weight-normal" lang="en">32</td>
											<td className="text-right font-weight-normal" lang="en">34</td>
										</tr>
										<tr>
											<th scope="row" className="text-center font-weight-normal">안성</th>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
										</tr>
										<tr>
											<th scope="row" className="text-center font-weight-normal">상암</th>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
											<td className="text-right text-muted" lang="en">-</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>                                  
					</Sample>   
					<Code text="image" copyTrue={false} downTrue={true}>
						<img style={{'width':'16px','height':'16px'}} src={require('./../assets/btn-xs-down.png')} alt="펼치기"/>
						<img style={{'width':'16px','height':'16px'}} className="ml-2" src={require('./../assets/btn-xs-up.png')}  alt="접기"/>
					</Code>
					<Code text="html" copyTrue={true}>
						{`<table class="sTable">
	<colgroup>
		<col width="10%"/>
		<col width="13%"/>
		<col width="13%"/>
		<col width="13%"/>
		<col width="13%"/>
		<col width="13%"/>
		<col width="13%"/>
		<col />
	</colgroup>
	<thead>
		<tr class="font-12 bg-zone">
			<th scope="col" class="text-center">
				센터 <button class="btn down" title="센터 전체 보기"></button>
				{/* <button class="btn up" title="센터 간략 보기"></button> */}
			</th>
			<th scope="col" class="text-center">출고지시</th>
			<th scope="col" class="text-center">피팅</th>
			<th scope="col" class="text-center">검수패킹</th>
			<th scope="col" class="text-center">미배송</th>
			<th scope="col" class="text-center">답변대기</th>
			<th scope="col" class="text-center">처리중</th>
			<th scope="col" class="text-center">답변완료</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row" class="text-center font-weight-normal">동탄</th>
			<td class="text-right text-muted">-</td>
			<td class="text-right font-weight-normal">30</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right font-weight-normal">1</td>
			<td class="text-right font-weight-normal">32</td>
			<td class="text-right font-weight-normal">34</td>
		</tr>
		<tr>
			<th scope="row" class="text-center font-weight-normal">안성</th>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
		</tr>
		<tr>
			<th scope="row" class="text-center font-weight-normal">상암</th>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
			<td class="text-right text-muted">-</td>
		</tr>
	</tbody>
</table>`}
					</Code>
					<Code text="css" copyTrue={true}>
						{`.sTable {
	width: 100%;
	margin-bottom: 0 !important;
	border-collapse: collapse;
	font-size: 14px;
	color: #212B36 !important;
	background-color: white;
  }
  
  .sTable tr :nth-child(1) {
	border-left: none;
  }
  
  .sTable tr :last-child {
	border-right: none;
  }
  
  .sTable td, .sTable th {
	padding: .3rem;
	border-color: #F4F6F8;
	border-width: 1px;
	border-style: solid;
	font-weight: normal;
  }
  
  .sTable .font-12 {
	font-size: 12px;
  }
  
  .sTable .font-weight-bolder {
	font-weight: 600;
  }
  
  .sTable .font-weight-bold {
	font-weight: 700;
  }
  
  .sTable .bg-border {
	background-color: #F4F6F8 !important;
  }
  
  .sTable .bg-white {
	background-color: #fff;
  }
  
  .sTable .text-center {
	text-align: center;
  }
  
  .sTable .text-right {
	text-align: right;
  }
  
  .sTable .btn {
	width: 16px !important;
	height: 16px !important;
	padding: 0px;
	display: inline-block !important;
	background-size: 100%;
	background-repeat: no-repeat;
  }
  
  .sTable .up {
	background-image: url(./../assets/btn-xs-down.png) !important;
	background-size: cover;
  }
  
  .sTable .down {
	background-image: url(./../assets/btn-xs-down.png) !important;
	background-size: cover;
  }
						`}
					</Code>
				</div>
            </Content>
        </>
    );
}

export default Table;



