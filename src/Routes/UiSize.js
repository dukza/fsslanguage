import React from 'react';


import Content from 'Components/Content';
import Font16 from '../Components/Title/Font16';

const UiSize = () => {
    return(
        <>
            <Content title="사이즈 표준화">
                <div className="row">
                    <Font16></Font16>
                    <div className="col-12 h--3"></div>
                    <div className="col-12">
                        <table className="table text-body w-100">
                            <colgroup>
                                <col width="30%"/>
                                <col />
                            </colgroup>
                            <thead className="bg-white">
                                <tr>
                                    <td className="border-0" colSpan="2">기획서 사이즈</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-lighter-top"><a href="https://www.figma.com/proto/afMdShoWh7DEJETUd8d3Tu/Doyo-Design-Kit?node-id=1873%3A80&scaling=min-zoom" target="_blank">모바일 사이즈</a></td>
                                    <td className="border-lighter-top">360px</td>
                                </tr>
                                <tr>
                                    <td><a href="https://www.figma.com/proto/afMdShoWh7DEJETUd8d3Tu/Doyo-Design-Kit?node-id=1876%3A8018&scaling=min-zoom" target="_blank">데스크탑 사이즈</a></td>
                                    <td>1440px</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default UiSize;



