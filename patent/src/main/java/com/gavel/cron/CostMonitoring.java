package com.gavel.cron;


import com.gavel.patent.service.DailytaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class CostMonitoring {

    @Autowired
    private DailytaskService dailytaskService;

    @Scheduled(fixedDelay = 1000*60*60, initialDelay = 1000 * 5)
    public void init() {
        scan();
    }

    public void scan() {

        System.out.println("定时运行.......");

        dailytaskService.exec();

    }

}
