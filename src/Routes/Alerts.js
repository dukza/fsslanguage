import React from 'react';

import Content from 'Components/Content';
import Code from 'Components/Code';

const Alerts = () => {
    return(
        <>
            <Content title="Alerts">
				<div className="row">
					<div className="col-12 mb-5">
						<div className="row">
							<div className="alerts">
								<div class="wrap shadow card">
									😀<span className="d-inline-block ml-2">출고 신청 버튼을 눌러주세요!</span>
									<span className="dir"></span>
								</div>  
							</div>
						</div>
					</div>         
					<div className="col-12 h-4"></div>
					<Code text="html" copyTrue={true}>
						{`<div className="alerts">
	<div class="wrap shadow card">
		😀<span class="d-inline-block ml-2">출고 신청 버튼을 눌러주세요!</span>
		<span class="dir"></span>
	</div>  
</div>`}
					</Code>
					<div className="col-12 h-4"></div>
					<Code text="css" copyTrue={true}>
						{`.alerts {
	padding-right: 15px;
	padding-left: 15px;
}
.alerts .wrap {
	padding-right: 15px;
	padding-left: 15px;
	color: #454F5B !important;
	background-color: #fff !important;
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: normal !important;
		-ms-flex-direction: row !important;
			flex-direction: row !important;
	-webkit-box-pack: end !important;
		-ms-flex-pack: end !important;
			justify-content: flex-end !important;
	-webkit-box-align: center !important;
		-ms-flex-align: center !important;
			align-items: center !important;
	padding-bottom: 0.5rem !important;
	padding-top: 0.5rem !important;
	-webkit-animation: moveBox 1s ease-out;
			animation: moveBox 1s ease-out;
	-webkit-animation-iteration-count: 8;
			animation-iteration-count: 8;
	position: relative;
	}

.alerts .shadow {
	-webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
			box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.alerts .card {
	position: relative;
	display: -webkit-box !important;
	display: -ms-flexbox !important;
	display: flex !important;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: .25rem;
}

.alerts .dir {
	width: 12px;
	height: 12px;
	border-top: 1px solid rgba(0, 0, 0, 0.125);
	border-right: 1px solid rgba(0, 0, 0, 0.125);
	background: #ffffff;
	-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
	position: absolute;
	top: 50%;
	right: -6px;
	margin-top: -6px;
}

@-webkit-keyframes moveBox {
	form {
		-webkit-transform: translateX(0px);
				transform: translateX(0px);
	}
	to {
		-webkit-transform: translateX(24px);
				transform: translateX(24px);
	}
}

@keyframes moveBox {
	form {
		-webkit-transform: translateX(0px);
				transform: translateX(0px);
	}
	to {
		-webkit-transform: translateX(24px);
				transform: translateX(24px);
	}
}`}
					</Code>                            
				</div>
			</Content>
        </>
    );
}

export default Alerts;



