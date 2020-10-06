import React from 'react';


import Content from 'Components/Content';
import Font16 from '../Components/Title/Font16';

const Writing = () => {
    return(
        <>
            <Content title="표기">
                <div className="row">
                    <div className="col-12 h--3"></div>
                    <div className="col-12">
                        <table className="table text-body w-100">
                            <colgroup>
                                <col width="20%"/>
                                <col />
                            </colgroup>
                            <thead className="bg-white text-dark font-weight-bolder font-14">
                                <tr>
                                    <td className="border-0" colSpan="2">표기 통일</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-lighter-top">날짜</td>
                                    <td className="border-lighter-top">yyyy-mm-dd 형식으로 통일</td>
                                </tr>
                                <tr>
                                    <td>기간</td>
                                    <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
                                </tr>                        
                            </tbody>
                        </table>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Writing;



