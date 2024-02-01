package org.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Info {

    private String info;
    @Id
    private String id;



    public Info(String info , String id) {
        this.id = id;
        this.info = info;
    }

    public Info() {

    }


    public String getInfo() {
        return info;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
