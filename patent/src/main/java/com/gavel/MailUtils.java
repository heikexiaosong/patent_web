package com.gavel;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class MailUtils {

    public static void main(String[] args) throws MessagingException {
        sendMail(new String[]{"1072882877@qq.com"});
    }

    public static void sendMail(String[] emails ) throws MessagingException {

        if ( emails==null || emails.length==0 ){
            System.out.println("没有收件人， 停止发送!");
            return;
        }

        List<Address> addresses = new ArrayList<>();
        for (String email : emails) {
            if ( email==null || email.trim().length()==0 ){
                continue;
            }
            addresses.add(new InternetAddress(email.trim()));
        }
        if ( addresses.size()==0 ){
            System.out.println("没有有效的收件人， 停止发送!");
            return;
        }

        Properties props = new Properties();
        // 开启debug调试
        props.setProperty("mail.debug", "true");
        // 发送服务器需要身份验证
        props.setProperty("mail.smtp.auth", "true");
        // 设置邮件服务器主机名
        props.setProperty("mail.host", "smtp.126.com");
        // 发送邮件协议名称
        props.setProperty("mail.transport.protocol", "smtp");

        // 设置环境信息
        Session session = Session.getInstance(props);

        // 创建邮件对象
        Message msg = new MimeMessage(session);
        msg.setSubject("案件提醒");
        // 设置邮件内容
        msg.setText("尊敬的顾客你好， 你的案件费用快到截至日期！");
        // 设置发件人（账号）
        msg.setFrom(new InternetAddress("shenzhenjizhi@126.com"));

        Transport transport = session.getTransport();
        // 连接邮件服务器(账号，授权码)
        transport.connect("shenzhenjizhi@126.com", "binbin72535");
        // 发送邮件
        transport.sendMessage(msg, addresses.toArray(new Address[addresses.size()]));
        // 关闭连接
        transport.close();
    }
}