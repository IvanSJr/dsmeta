package com.github.ivansjr.dsmeta.service;

import com.github.ivansjr.dsmeta.entities.Sale;
import com.github.ivansjr.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleService {


    @Autowired
    private SaleRepository saleRepository;

    @Transactional(readOnly = true)
    public List<Sale> findSales(){
        return saleRepository.findAll();
    }

}
