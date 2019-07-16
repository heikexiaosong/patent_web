package com.gavel.cron;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class CostMonitoring {

    @Scheduled(fixedDelay = 1000*5, initialDelay = 1000 * 5)
    public void init() {
        System.out.println("dddddddddddddddddddddddd-----");
    }

}
