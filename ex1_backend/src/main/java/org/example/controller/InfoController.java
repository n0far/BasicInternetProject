package org.example.controller;

import org.example.repository.InfoRepository;
import org.example.model.Info;
import org.example.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController

public class InfoController {

    @Autowired
    private InfoService infoService;

    @GetMapping("/info/{id}")
    public Optional<Info> getInfoById(@PathVariable String id) {
        return infoService.getInfo(id);
    }

    @PostMapping("/info")
    public void addInfo(@RequestBody Info info) {
        infoService.updateInfo(info);
    }




}
