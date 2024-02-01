package org.example.service;

import org.example.model.Info;
import org.example.repository.InfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InfoService {
    @Autowired
    InfoRepository infoRepository;

    public Optional<Info> getInfo(String key) {
        return infoRepository.findById(key);
    }

    public void updateInfo(Info info){


        infoRepository.deleteById(info.getId());
        infoRepository.save(info);
    }





}
