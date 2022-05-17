from fastapi import FastAPI
import pymysql
import config
import os

app = FastAPI()


# MySQL 连接信息
conn = pymysql.connect(host=config.dbhost, user=config.dbuser, password=config.dbpass, db='website')


# 获取文章列表
@app.get("/posts")
def fetchPosts():
    with conn.cursor() as cursor:
        sql = 'SELECT p.id, p.title, p.description, u.name, p.createTime, p.imagePath FROM post p ' \
                '  LEFT JOIN web_user u ON p.authorId = u.id ORDER BY p.createTime DESC'
        cursor.execute(sql)
        rows = cursor.fetchall()

    results = []
    for row in rows:
        results.append({
            'id': row[0],
            'title': row[1],
            'description': row[2],
            'author': row[3],
            'createTime': row[4],
            'imagePath': row[5]
        })

    return results


# 获取单个文章MarkDown内容
@app.get("/post-content/{id}")
def fetchOnePost(id):
    sql = f'SELECT path FROM post WHERE id = {id}'

    with conn.cursor() as cursor:
        cursor.execute(sql)
        row = cursor.fetchone()
    if row == None:
        print(f'没有找到id为{id}的文章')
        return ""

    filePath = config.fileBase + row[0]
    if not os.path.exists(filePath):
        print(f'文件{filePath}不存在')
        return ""
    with open(filePath, 'r') as f:
        return f.read()