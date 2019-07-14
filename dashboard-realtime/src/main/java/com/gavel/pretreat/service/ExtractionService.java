package com.gavel.pretreat.service;

import java.util.Date;
import java.util.List;

public interface ExtractionService {

   public Object extraction(Date time, List<String> metrics);

   public Object extraction(Date startTime, Date endTime, String algorithm, List<String> metrics);

}
