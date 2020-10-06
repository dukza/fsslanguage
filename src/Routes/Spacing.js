import React from 'react';

import Content from 'Components/Content';
import Font16 from '../Components/Title/Font16';

const Spacing = () => {
    return(
        <>
            <Content title="띄어쓰기">
                <div className="row">
                    <div className="col-12 h--3"></div>
                    <div className="col-12">
                        <table className="table text-body w-100">
                            <colgroup>
                                <col width="30%"/>
                                <col width="30%"/>
                                <col />
                            </colgroup>
                            <thead className="bg-white text-dark font-weight-bolder font-14">
                                <tr>
                                    <td className="border-0">내용</td>
                                    <td className="border-0">예시</td>
                                    <td className="border-0">설명</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark font-weight-bolder border-lighter-top">하기, 합니다, 입니다는 앞 단어와 붙여쓰기</td>
                                    <td>입고 하기(X) 입고하기(O),<br />출고 합니다(X) 출고합니다(O)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="text-dark font-weight-bolder">'해 주세요'로 통일</td>
                                    <td>문의해 주세요</td>
                                    <td className="font-14">해주세요, 해 주세요, 해 주십시오, 해주시기 바랍니다, 하세요, 하십시오 중 '해 주세요'로 통일</td>
                                </tr>   
                                <tr>
                                    <td className="text-dark font-weight-bolder">FMS 메뉴명 규칙</td>
                                    <td>입금이체 조회</td>
                                    <td className="font-14">전문어는 붙여쓰고 '조회', '선택'은 띄어 쓰기 목적어+서술어 개념인 경우에는 띄어쓰고, 피수식어+수식어 개념인 경우에는 붙여쓰기</td>
                                </tr>
                                <tr>
                                    <td className="text-dark font-weight-bolder">Label(레이블)명 규칙</td>
                                    <td>휴대폰 번호 인증, 사업장 주소, 고객사 이름, 문의 내용</td>
                                    <td className="font-14">전문어는 붙여쓰고 전문어가 아닌 경우는 모두 띄어쓰기</td>
                                </tr>  
                                <tr>
                                    <td className="text-dark font-weight-bolder">버튼명 규칙</td>
                                    <td></td>
                                    <td className="font-14">전문어는 붙여쓰고 전문어가 아닌 경우는 모두 띄어쓰기</td>
                                </tr>  
                                <tr>
                                    <td className="text-dark font-weight-bolder">링크명 규칙</td>
                                    <td></td>
                                    <td className="font-14">전문어는 붙여쓰고 '조회', '선택'은 띄어 쓰기 목적어+서술어 개념인 경우에는 띄어쓰고, 피수식어+수식어 개념인 경우에는 붙여쓰기</td>
                                </tr>  
                            </tbody>
                        </table>
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Spacing;



