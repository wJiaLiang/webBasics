/**
 * ITCAST WEB
 * Created by zhousg on 2016/5/16.
 */
window.onload = function(){
    deleteFuc();
};

/*������ʾ��*/
function deleteFuc(){
    /*
    * 1.���ɾ����ť ��Ҫ������ʾ  ����������ʾ��
      * �Ѹ��Ӵ� ����ת���ӣ�
    * 2.���ȡ����ʱ��  �ر���ʾ  �����������أ�
    * �Ѹ��Ӹ��� ��ȡ���ı�����ԣ�
    * */

    /*������*/
    var jdWin = document.querySelector('.jd_win');
    /*��������*/
    var jdWinBox = jdWin.querySelector('.jd_win_box');
    /*�ҵ����е�ɾ������*/
    var deleteBtnList = document.querySelectorAll('.delete_btn');

    /*��¼��ǰ�����ɾ������*/
    var currUp = null;

    /*�����еĺ��Ӽ��ϵ���¼�  click*/
    for(var i = 0 ; i < deleteBtnList.length ; i ++){
        deleteBtnList[i].onclick = function(){
            /*��Ҫ������ʾ */
            jdWin.style.display = "block";
            /*����������Ҫ����*/
            jdWinBox.classList.add('myBounceInDown');
            /*�Ѹ��Ӵ�*/
            /*�ҵ�����*/
            var up = currUp = this.querySelector('.delete_up');
            /*�ӹ���*/
            up.style.webkitTransition = "all 1s";
            up.style.transition = "all 1s";
            /*������תԭ��*/
            up.style.webkitTransformOrigin = "0 5px";/*left bottom*/
            up.style.transformOrigin = "0 5px";/*left bottom*/
            /*�ı�  �Ƕ�*/
            up.style.webkitTransform = "rotate(-30deg) translateY(2px)";
            up.style.transform =  "rotate(-30deg) translateY(2px)";
        }
    }

    /*���ȡ����ʱ��*/
    jdWinBox.querySelector('.cancel').onclick = function(){
        /*�ر���ʾ*/
        jdWin.style.display = "none";
        /*�Ѹ��Ӹ���  ???   ��ǰ���Ǹ����Ӵ�*/
        if(currUp){
            currUp.style.webkitTransform = "none";
            currUp.style.transform =  "none";
        }
    }

}